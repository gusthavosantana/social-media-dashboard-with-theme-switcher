import React, { useContext } from 'react';
import styles from './styles.module.css';
import { ThemeContext } from '../../Context/Theme';

export default function Card({ item }) {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={styles.container} style={{ background: theme.card.bgColor }}>
            <div className={styles.header}>
                <img src={`/images/icon-${item.socialMedia}.svg`}/>
                <span className={styles.profileName}>@nathanf</span>
            </div>
            <span className={styles.value} style={{ color: theme.card.valueColor }}>1987</span>
            <span className={styles.label}>{item.type}</span>
            <span className={styles.footer}>
                <img src={`/images/icon-${item.today > 0 ? 'up' : 'down'}.svg`} />
                <span className={styles.footerText} style={{ color: item.today > 0 ? 'var(--lime-green)' : 'var(--bright-red)' }}>{Math.abs(item.today)} Today</span>
            </span>
        </div>
    );
}