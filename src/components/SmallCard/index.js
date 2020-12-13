import React, { useContext } from 'react';
import { 
    CardContainer,
    CardLabel,
    CardValue,
    CardVariation,
    CardVariationValue
} from './styles.js';
import { ThemeContext } from '../../Context/Theme';

export default function SmallCard({ item }) {
    const { theme } = useContext(ThemeContext);
    return (
        <CardContainer theme={theme}>
            <CardLabel theme={theme}>{item.metric}</CardLabel>
            <img src={`/images/icon-${item.socialMedia}.svg`} />
            <CardValue theme={theme}>{item.value}</CardValue>
            <CardVariation>
                <img src={`/images/icon-${item.variation > 0 ? 'up' : 'down'}.svg`} />
                <CardVariationValue value={item.variation}>
                    {Math.abs(item.variation)}%
                </CardVariationValue>
            </CardVariation>
        </CardContainer>
    );
}