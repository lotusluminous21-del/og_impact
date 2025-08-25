// Scroll utility functions for improved navigation and scrolling behavior

export const SCROLL_OFFSET = 80; // Account for fixed navigation height + some padding

/**
 * Smooth scroll to an element with proper offset for fixed navigation
 */
export const scrollToElement = (elementId: string, offset: number = SCROLL_OFFSET) => {
    const element = document.getElementById(elementId);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

/**
 * Get the current scroll position
 */
export const getScrollPosition = (): number => {
    return window.pageYOffset || document.documentElement.scrollTop;
};

/**
 * Check if an element is in viewport
 */
export const isElementInViewport = (element: Element): boolean => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

/**
 * Get the section that should be considered active based on scroll position
 */
export const getActiveSection = (sections: string[]): string => {
    const scrollPosition = getScrollPosition() + SCROLL_OFFSET;

    for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
            const sectionTop = section.offsetTop;
            if (scrollPosition >= sectionTop) {
                return sections[i];
            }
        }
    }

    return 'home';
};

/**
 * Create intersection observer for section detection
 */
export const createSectionObserver = (
    sections: string[],
    onSectionChange: (section: string) => void
): IntersectionObserver => {
    return new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    if (sections.includes(sectionId)) {
                        onSectionChange(sectionId);
                    }
                }
            });
        },
        {
            root: null,
            rootMargin: `-${SCROLL_OFFSET}px 0px -30% 0px`,
            threshold: 0.3
        }
    );
};
