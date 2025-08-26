import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { shaderMaterial, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useMotionValue, animate } from 'framer-motion';
import { useUIStore } from '../../store/uiStore';

// The final unified shader with a new data map uniform
const UnifiedEarthMaterial = shaderMaterial(
    {
        time: 0,
        dayTexture: null as any,
        nightTexture: null as any,
        // NEW: A uniform for the precise data map
        dataMapTexture: null as any,
        earthRotation: 0,
        uTransition: 0.0,
    },
    // Vertex Shader (No changes)
    `
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;

    void main() {
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    // Fragment Shader (Using the new data map)
    `
    uniform float time;
    uniform sampler2D dayTexture;
    uniform sampler2D nightTexture;
    uniform sampler2D dataMapTexture; // NEW
    uniform float earthRotation;
    uniform float uTransition;

    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;

    // --- UTILITY FUNCTIONS ---
    float hash(float n) { return fract(sin(n) * 43758.5453123); }
    vec3 hash3(float n) { return vec3(hash(n * 3.14), hash(n * 6.28), hash(n * 9.42)); }

    // --- DARK MODE SHADER LOGIC (Unchanged) ---
    vec3 createDarkModeSparks(vec3 normal, vec2 uv, float rotation) {
        vec3 totalEmission = vec3(0.0);
        for (int i = 0; i < 5; i++) {
            float sparkIndex = float(i) + 1.0;
            float timeSeed = floor(time / 4.0) + sparkIndex * 10.0;
            vec3 randomValues = hash3(timeSeed);
            vec3 impactPoint = normalize(vec3(randomValues.x * 2.0 - 1.0, randomValues.y * 2.0 - 1.0, randomValues.z * 2.0 - 1.0));
            mat3 rotationMatrix = mat3(cos(-rotation), 0.0, sin(-rotation), 0.0, 1.0, 0.0, -sin(-rotation), 0.0, cos(-rotation));
            impactPoint = rotationMatrix * impactPoint;
            float distToImpact = acos(dot(normal, impactPoint));
            float sparkProgress = fract(time / 4.0);
            float bloomRadius = 0.3;
            float bloomIntensity = smoothstep(0.0, 0.4, sparkProgress) * (1.0 - smoothstep(0.6, 1.0, sparkProgress));
            float bloom = (1.0 - smoothstep(0.0, bloomRadius, distToImpact)) * bloomIntensity;
            vec3 dayColor = texture2D(dayTexture, uv).rgb;
            vec3 goldTint = vec3(1.0, 0.9, 0.7);
            vec3 emission = dayColor * bloom * goldTint * 1.5;
            float core = (1.0 - smoothstep(0.0, 0.03, distToImpact)) * bloomIntensity;
            emission += vec3(1.0) * core * 2.0;
            totalEmission += emission;
        }
        return totalEmission;
    }

    // --- LIGHT MODE SHADER LOGIC ("Sonar Ping" effect - Unchanged) ---
    float createSonarPingMask(vec3 normal, float rotation) {
        float totalMask = 0.0;
         for (int i = 0; i < 5; i++) {
            float pingIndex = float(i) + 1.0;
            float timeSeed = floor(time / 4.0) + pingIndex * 10.0;
            vec3 randomValues = hash3(timeSeed);
            vec3 impactPoint = normalize(vec3(randomValues.x * 2.0 - 1.0, randomValues.y * 2.0 - 1.0, randomValues.z * 2.0 - 1.0));
            mat3 rotationMatrix = mat3(cos(-rotation), 0.0, sin(-rotation), 0.0, 1.0, 0.0, -sin(-rotation), 0.0, cos(-rotation));
            impactPoint = rotationMatrix * impactPoint;
            float distToImpact = acos(dot(normal, impactPoint));
            float pingProgress = fract(time / 4.0);
            float ringRadius = pingProgress * 0.6;
            float ringWidth = 0.01;
            float fade = 1.0 - pingProgress;
            float ring = smoothstep(ringRadius - ringWidth, ringRadius, distToImpact) - smoothstep(ringRadius, ringRadius + ringWidth, distToImpact);
            float echoRadius = ringRadius * 0.7 - 0.05;
            float echoRing = smoothstep(echoRadius - ringWidth, echoRadius, distToImpact) - smoothstep(echoRadius, echoRadius + ringWidth, distToImpact);
            totalMask += (ring + echoRing * 0.5) * pow(fade, 2.0);
        }
        return clamp(totalMask, 0.0, 1.0);
    }

    void main() {
        vec3 normal = normalize(vNormal);

        // --- 1. DARK MODE VISUALS ---
        vec3 nightColor = texture2D(nightTexture, vUv).rgb;
        vec3 darkEmission = createDarkModeSparks(normal, vUv, earthRotation);
        vec3 darkModeFinal = nightColor + darkEmission;

        // --- 2. LIGHT MODE VISUALS (Using the correct data map) ---
        // MODIFIED: We now read the red channel from our precise data map.
        // This gives us a perfect, cloud-free land vs. water mask.
        float landMask = texture2D(dataMapTexture, vUv).r; 
        
        // Adjust the thresholds for the new data source.
        float continentMask = smoothstep(0.05, 0.1, landMask);
        float shoreline = smoothstep(0.05, 0.07, landMask) - smoothstep(0.07, 0.09, landMask);
        vec3 shorelineGlow = vec3(0.7, 0.85, 1.0) * shoreline * 1.5;

        float gridX = smoothstep(0.99, 1.0, abs(sin(vUv.x * 360.0)));
        float gridY = smoothstep(0.99, 1.0, abs(sin(vUv.y * 180.0)));
        float grid = max(gridX, gridY);
        vec3 gridColor = vec3(0.8) * grid * (1.0 - continentMask) * 0.35;
        
        vec3 blueprintBg = vec3(1.0);
        vec3 continentColor = vec3(0.85);
        
        vec3 lightModeBase = mix(blueprintBg, continentColor, continentMask);
        lightModeBase += shorelineGlow;
        lightModeBase -= gridColor;

        float sonarMask = createSonarPingMask(normal, earthRotation);
        vec3 sonarColor = vec3(0.1, 0.2, 0.5);
        vec3 lightModeFinal = mix(lightModeBase, sonarColor, sonarMask);

        // --- 3. TRANSITION LOGIC ---
        vec3 finalColor = mix(darkModeFinal, lightModeFinal, uTransition);
        gl_FragColor = vec4(finalColor, 1.0);
    }
  `
);

// --- REACT COMPONENT (Updated to load and pass the new texture) ---

const EarthMesh: React.FC = () => {
    const earthRef = useRef<THREE.Mesh>(null);
    const { isDarkMode } = useUIStore();

    // MODIFIED: Load all three textures now.
    const [dayTexture, nightTexture, dataMapTexture] = useTexture([
        '/earth_day_4096.jpg',
        '/earth_night_4096.jpg',
        '/earth_bump_roughness_clouds_4096.jpg', // The crucial data map
    ]);

    useMemo(() => {
        dayTexture.colorSpace = THREE.SRGBColorSpace;
        nightTexture.colorSpace = THREE.SRGBColorSpace;
    }, [dayTexture, nightTexture]);

    const material = useMemo(() => new UnifiedEarthMaterial(), []);

    const transition = useMotionValue(isDarkMode ? 0 : 1);

    useEffect(() => {
        animate(transition, isDarkMode ? 0 : 1, {
            duration: 0.55,
            type: "tween",
            ease: "easeOut",
        });
    }, [isDarkMode, transition]);

    useFrame((state) => {
        if (earthRef.current && material) {
            earthRef.current.rotation.y += 0.001;
            material.time = state.clock.elapsedTime;
            material.earthRotation = earthRef.current.rotation.y;

            // Pass all textures to the shader
            material.uniforms.dayTexture.value = dayTexture;
            material.uniforms.nightTexture.value = nightTexture;
            material.uniforms.dataMapTexture.value = dataMapTexture; // NEW

            material.uniforms.uTransition.value = transition.get();
        }
    });

    return (
        <mesh ref={earthRef}>
            <sphereGeometry args={[1, 64, 64]} />
            <primitive object={material} attach="material" />
        </mesh>
    );
};

export const EarthImpactShader: React.FC = () => {
    return (
        <Canvas
            camera={{ position: [7, 3, 5], fov: 25 }}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
            }}
            gl={{ alpha: true, antialias: true }}
        >
            <EarthMesh />
        </Canvas>
    );
};