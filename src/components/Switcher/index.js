import React, { useContext } from 'react';
import styles from './styles.module.css';
import { ThemeContext } from '../../Context/Theme';

export default function Switcher() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className={styles.container}>
            <span className={styles.label}>{theme.switcher.label}</span>
            <div className={styles.component} onClick={toggleTheme} style={{ background: theme.switcher.componentBg }}>
              <span className={styles.button} style={{ background: theme.switcher.buttonBg, left: theme.switcher.left }}></span>
            </div>
        </div>
    );
}