import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media (max-width: 880px) {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 1.1rem;
    }
`;

const Title = styled.h1`
    margin-bottom: 0;
`;

const Subtitle = styled.h2`
    margin-top: 0;
    color: var(--dark-grayish-blue-text);
    font-size: 0.9rem;
`;

export { Header, Title, Subtitle };