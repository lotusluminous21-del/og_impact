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

export const useUIStore = create<UIState>((set) => ({
    // Initial state
    isMenuOpen: false,
    activeSection: 'home',
    scrollY: 0,
    isScrolling: false,
    isDarkMode: true, // Default to dark mode
    animationsEnabled: true,
    heroAnimationComplete: false,

    // Actions
    toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
    setActiveSection: (section) => set({ activeSection: section }),
    setScrollY: (y) => set({ scrollY: y }),
    setScrolling: (scrolling) => set({ isScrolling: scrolling }),
    toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    setDarkMode: (dark) => set({ isDarkMode: dark }),
    setHeroAnimationComplete: (complete) => set({ heroAnimationComplete: complete }),
}));
