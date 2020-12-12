import React, { useContext } from 'react';
import styles from './styles.module.css';
import { ThemeContext } from '../../src/Context/Theme';

export default function SmallCard({ item }) {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={styles.container} style={{ background: theme.card.bgColor }}>
            <span className={styles.label} style={{color: theme.card.labelColor}}>{item.metric}</span>
              <img src={`/images/icon-${item.socialMedia}.svg`} />
              <span className={styles.value} style={{ color: theme.card.valueColor }}>{item.value}</span>
              <span className={styles.variation}>
                <img src={`/images/icon-${item.variation > 0 ? 'up' : 'down'}.svg`} />
                <span style={{ color: item.variation > 0 ? 'var(--lime-green)' : 'var(--bright-red)' }}>{Math.abs(item.variation)}%</span>
            </span>
        </div>
    );
}