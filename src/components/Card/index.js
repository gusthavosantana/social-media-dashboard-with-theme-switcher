import React, { useContext } from 'react';
import { 
    CardContainer, 
    CardHeader,
    CardProfile, 
    CardValue,
    CardLabel,
    CardFooter,
    CardFooterText
} from './styles.js';
import { ThemeContext } from '../../Context/Theme';

export default function Card({ item }) {
    const { theme } = useContext(ThemeContext);
    return (
        <CardContainer theme={theme}>
            <CardHeader>
                <img src={`/images/icon-${item.socialMedia}.svg`}/>
                <CardProfile>@nathanf</CardProfile>
            </CardHeader>
            <CardValue theme={theme}>1987</CardValue>
            <CardLabel>{item.type}</CardLabel>
            <CardFooter>
                <img src={`/images/icon-${item.today > 0 ? 'up' : 'down'}.svg`} />
                <CardFooterText value={item.today}>
                    {Math.abs(item.today)} Today
                </CardFooterText>
            </CardFooter>
        </CardContainer>
    );
}