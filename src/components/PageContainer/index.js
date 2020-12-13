import React, { useContext } from 'react';
import { Container } from './styles'
import { ThemeContext } from '../../Context/Theme'

export default function PageContainer({ children }) {
    const { theme } = useContext(ThemeContext);
    return (
        <Container theme={theme}>
            {children}
        </Container>
    )
}