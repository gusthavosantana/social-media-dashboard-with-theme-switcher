import styled, { css } from "styled-components";

const Container = styled.main`
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    ${props => css`
        background: ${props.theme.containerBackground};
        color: ${props.theme.containerColor};
    `}
`
export { Container };