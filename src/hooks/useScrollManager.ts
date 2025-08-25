import { useEffect, useRef } from 'react';
import { useUIStore } from '../store/uiStore';
import { createSectionObserver, getActiveSection, getScrollPosition } from '../utils/scrollUtils';

const SECTIONS = ['home', 'why-us', 'mission', 'services', 'stats', 'testimonials', 'team', 'cta', 'contact'];

export const useScrollManager = () => {
    const { setActiveSection, setScrollY, setScrolling } = useUIStore();
    const observerRef = useRef<IntersectionObserver | null>(null);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Create intersection observer for section detection
        observerRef.current = createSectionObserver(SECTIONS, (sectionId) => {
            setActiveSection(sectionId);
        });

        // Observe all sections with a small delay to ensure DOM is ready
        const observeSections = () => {
            SECTIONS.forEach(sectionId => {
                const element = document.getElementById(sectionId);
                if (element && observerRef.current) {
                    observerRef.current.observe(element);
                }
            });
        };

        // Initial observation
        observeSections();

        // Retry observation after a short delay in case sections aren't ready yet
        const timeoutId = setTimeout(observeSections, 100);

        // Handle scroll events for scroll position tracking
        const handleScroll = () => {
            const scrollY = getScrollPosition();
            setScrollY(scrollY);
            setScrolling(true);

            // Clear existing timeout
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }

            // Set scrolling to false after scroll ends
            scrollTimeoutRef.current = setTimeout(() => {
                setScrolling(false);
            }, 150);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Initial active section detection
        const initialActiveSection = getActiveSection(SECTIONS);
        setActiveSection(initialActiveSection);

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
            clearTimeout(timeoutId);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setActiveSection, setScrollY, setScrolling]);

    return {
        sections: SECTIONS
    };
};
