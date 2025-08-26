import React from 'react';
import { motion } from 'framer-motion';
import { useUIStore } from '../../store/uiStore';
import { isFollowingSystemTheme } from '../../utils/themeUtils';

export const ThemeToggle: React.FC = () => {
    const { isDarkMode, toggleDarkMode } = useUIStore();
    const followingSystem = isFollowingSystemTheme();

    return (
        <motion.button
            onClick={toggleDarkMode}
            className="relative p-2 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={
                followingSystem
                    ? `${isDarkMode ? 'Dark' : 'Light'} mode (following system)`
                    : `${isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}`
            }
            title={
                followingSystem
                    ? `${isDarkMode ? 'Dark' : 'Light'} mode (following system)`
                    : `${isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}`
            }
        >
            <motion.div
                className="w-5 h-5 relative"
                animate={{ rotate: isDarkMode ? 180 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {isDarkMode ? (
                    // Sun icon for dark mode
                    <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                            clipRule="evenodd"
                        />
                    </svg>
                ) : (
                    // Moon icon for light mode
                    <svg
                        className="w-5 h-5 text-gray-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                )}

                {/* System theme indicator */}
                {followingSystem && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full border border-white dark:border-gray-800" />
                )}
            </motion.div>
        </motion.button>
    );
};
