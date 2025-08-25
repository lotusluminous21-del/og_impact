import { useEffect, useRef, useCallback, useState } from 'react';

// Debounce hook for performance optimization
export const useDebounce = <T extends (...args: any[]) => any>(
    callback: T,
    delay: number
): T => {
    const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

    return useCallback(
        ((...args: Parameters<T>) => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => callback(...args), delay);
        }) as T,
        [callback, delay]
    );
};

// Throttle hook for performance optimization
export const useThrottle = <T extends (...args: any[]) => any>(
    callback: T,
    delay: number
): T => {
    const lastCall = useRef(0);
    const lastCallTimer = useRef<NodeJS.Timeout | undefined>(undefined);

    return useCallback(
        ((...args: Parameters<T>) => {
            const now = Date.now();
            if (now - lastCall.current >= delay) {
                callback(...args);
                lastCall.current = now;
            } else {
                if (lastCallTimer.current) {
                    clearTimeout(lastCallTimer.current);
                }
                lastCallTimer.current = setTimeout(() => {
                    callback(...args);
                    lastCall.current = Date.now();
                }, delay - (now - lastCall.current));
            }
        }) as T,
        [callback, delay]
    );
};

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (
    callback: IntersectionObserverCallback,
    options: IntersectionObserverInit = {}
) => {
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(callback, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
            ...options,
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [callback, options]);

    return observerRef.current;
};

// Performance monitoring hook
export const usePerformanceMonitor = (componentName: string) => {
    const renderCount = useRef(0);
    const startTime = useRef(performance.now());

    useEffect(() => {
        renderCount.current += 1;
        const endTime = performance.now();
        const renderTime = endTime - startTime.current;

        if (process.env.NODE_ENV === 'development') {
            console.log(`${componentName} rendered ${renderCount.current} times in ${renderTime.toFixed(2)}ms`);
        }

        startTime.current = performance.now();
    });
};

// Memory optimization: Cleanup function for large objects
export const useCleanup = (cleanupFn: () => void) => {
    useEffect(() => {
        return cleanupFn;
    }, [cleanupFn]);
};

// Reduce motion hook for accessibility and performance
export const useReducedMotion = () => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = (event: MediaQueryListEvent) => {
            setPrefersReducedMotion(event.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return prefersReducedMotion;
};

// Lazy loading hook for images and components
export const useLazyLoad = (src: string, fallback?: string) => {
    const [imageSrc, setImageSrc] = useState(fallback || src);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImageSrc(src);
            setIsLoaded(true);
        };
        img.onerror = () => {
            if (fallback) {
                setImageSrc(fallback);
                setIsLoaded(true);
            }
        };
    }, [src, fallback]);

    return { imageSrc, isLoaded };
};

// Animation performance optimization
export const getOptimizedAnimationConfig = (performance: 'high' | 'medium' | 'low' = 'medium') => {
    switch (performance) {
        case 'high':
            return {
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
                stagger: 0.02,
            };
        case 'medium':
            return {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                stagger: 0.05,
            };
        case 'low':
            return {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                stagger: 0.1,
            };
        default:
            return {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                stagger: 0.05,
            };
    }
};

// Scroll performance optimization
export const useOptimizedScroll = (callback: (scrollY: number) => void, throttleMs: number = 16) => {
    const throttledCallback = useThrottle(callback, throttleMs);

    useEffect(() => {
        const handleScroll = () => {
            throttledCallback(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [throttledCallback]);
};
