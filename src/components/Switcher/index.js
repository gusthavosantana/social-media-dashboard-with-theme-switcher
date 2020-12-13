import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/Theme';
import {
    SwitcherContainer,
    SwitcherLabel,
    SwitcherComponent,
    SwitcherButton
} from './styles.js';

export default function Switcher() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <SwitcherContainer>
            <SwitcherLabel>{theme.switcher.label}</SwitcherLabel>
            <SwitcherComponent onClick={toggleTheme} theme={theme}>
              <SwitcherButton theme={theme}></SwitcherButton>
            </SwitcherComponent>
        </SwitcherContainer>
    );
}