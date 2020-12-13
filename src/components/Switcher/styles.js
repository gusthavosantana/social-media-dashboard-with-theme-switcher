import styled, { css } from "styled-components";

const SwitcherContainer = styled.div`
    display: flex;
    align-items: center;
`

const SwitcherLabel = styled.span`
    color: var(--dark-grayish-blue-text);
    font-weight: bold;
    margin-right: 5px;
`

const SwitcherComponent = styled.div`
    width: 40px;
    height: 20px;
    background: ${props => props.theme.switcher.componentBg};
    border-radius: 15px;
    position: relative;
    cursor: pointer;
    transition: background-color .2s ease-in-out;
`

const SwitcherButton = styled.span`
    position: absolute;
    width: 15px;
    height: 15px;
    background: var(--dark-grayish-blue-text);
    top: 2px;
    left: 3px;
    border-radius: 50%;
    transition: left .2s ease-in-out;
    ${props => css`
        background: ${props.theme.switcher.buttonBg};
        left: ${props.theme.switcher.left}
    `}
`

export {
    SwitcherContainer,
    SwitcherLabel,
    SwitcherComponent,
    SwitcherButton
};