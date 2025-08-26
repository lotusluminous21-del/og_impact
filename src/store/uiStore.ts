import { create } from 'zustand';

interface UIState {
    // Navigation
    isMenuOpen: boolean;
    activeSection: string;

    // Scroll
    scrollY: number;
    isScrolling: boolean;

    // Theme
    isDarkMode: boolean;

    // Animations
    animationsEnabled: boolean;
    heroAnimationComplete: boolean;

    // Actions
    toggleMenu: () => void;
    setActiveSection: (section: string) => void;
    setScrollY: (y: number) => void;
    setScrolling: (scrolling: boolean) => void;
    toggleDarkMode: () => void;
    setDarkMode: (dark: boolean) => void;
    setHeroAnimationComplete: (complete: boolean) => void;
}

// Helper function to get initial theme from localStorage
const getInitialTheme = (): boolean => {
    if (typeof window === 'undefined') return true; // Default to dark mode for SSR

    const savedTheme = localStorage.getItem('theme');

    // If theme is saved, use it; otherwise default to dark mode
    if (savedTheme === 'light') return false;
    if (savedTheme === 'dark') return true;

    return true; // Default to dark mode
};

export const useUIStore = create<UIState>((set) => ({
    // Initial state
    isMenuOpen: false,
    activeSection: 'home',
    scrollY: 0,
    isScrolling: false,
    isDarkMode: getInitialTheme(),
    animationsEnabled: true,
    heroAnimationComplete: false,

    // Actions
    toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
    setActiveSection: (section) => set({ activeSection: section }),
    setScrollY: (y) => set({ scrollY: y }),
    setScrolling: (scrolling) => set({ isScrolling: scrolling }),
    toggleDarkMode: () => set((state) => {
        const newDarkMode = !state.isDarkMode;
        // Persist to localStorage
        localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
        return { isDarkMode: newDarkMode };
    }),
    setDarkMode: (dark) => set(() => {
        // Persist to localStorage
        localStorage.setItem('theme', dark ? 'dark' : 'light');
        return { isDarkMode: dark };
    }),
    setHeroAnimationComplete: (complete) => set({ heroAnimationComplete: complete }),
}));
