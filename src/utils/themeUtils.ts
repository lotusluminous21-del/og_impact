/**
 * Theme utility functions for debugging and testing
 */

export const getSystemTheme = (): 'dark' | 'light' => {
    if (typeof window === 'undefined') return 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const getSavedTheme = (): 'dark' | 'light' | null => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('theme') as 'dark' | 'light' | null;
};

export const getCurrentTheme = (): 'dark' | 'light' => {
    if (typeof window === 'undefined') return 'dark';
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
};

export const logThemeInfo = (): void => {
    if (typeof window === 'undefined') return;

    console.log('Theme Debug Info:', {
        systemTheme: getSystemTheme(),
        savedTheme: getSavedTheme(),
        currentTheme: getCurrentTheme(),
        hasDarkClass: document.documentElement.classList.contains('dark'),
        mediaQuery: window.matchMedia('(prefers-color-scheme: dark)').matches
    });
};

export const isFollowingSystemTheme = (): boolean => {
    return getSavedTheme() === null;
};
