import React from 'react';

const themes = {
    light: {
        containerBackground: 'var(--white-bg)',
        containerColor: 'var(--very-dark-blue-bg)',
        switcher: {
            componentBg: 'var(--toggle-light)',
            buttonBg: 'var(--white-bg)',
            left: '21px',
            label: 'Light Mode'
        },
        card: {
            valueColor: 'var(--very-dark-blue-bg)',
            bgColor: 'var(--Light-grayish-blue-card-bg)',
            labelColor: 'var(--dark-grayish-blue-text)'
        }
    },
    dark: {
        containerBackground: 'var(--very-dark-blue-bg)',
        containerColor: 'var(--white-text)',
        switcher: {
            componentBg: 'var(--Light-grayish-blue-card-bg)',
            buttonBg: 'var(--dark-grayish-blue-text)',
            left: '3px',
            label: 'Dark Mode'
        },
        card: {
            bgColor: 'var(--dark-desaturated-blue-card-bg)',
            valueColor: 'var(--white-text)',
            labelColor: 'var(--dark-grayish-blue-text)'
        }
    }
};

const ThemeContext = React.createContext({ theme: themes.dark, toggleTheme: () => {} });

export { ThemeContext, themes };