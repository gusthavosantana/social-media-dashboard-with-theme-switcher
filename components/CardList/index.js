import React from 'react';
import styles from './styles.module.css';

export default function CardList({ data, component: Component }) {
    return <div className={styles.container}>
        {data.map(current => <Component key={current.id} item={current} />)}
    </div>;
}