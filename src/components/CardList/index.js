import React from 'react';
import { CardListContainer } from './styles.js';

export default function CardList({ data, component: Component }) {
    return (
        <CardListContainer>
            {data.map(current => <Component key={current.id} item={current} />)}
        </CardListContainer>
    );
}