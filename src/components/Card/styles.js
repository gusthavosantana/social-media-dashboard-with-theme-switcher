import styled from "styled-components";

const CardContainer = styled.div`
    background-color:  ${props => props.theme.card.bgColor};
    width: 200px;
    height: 200px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 5px solid var(--facebook);

    @media(max-width: 430px) {
        width: 100%;
    }
`;

const CardHeader = styled.div`
    display: grid;
    grid-template-columns: 25px 1fr;
    align-items: center;
    margin-bottom: 0.8rem;
`;

const CardValue = styled.span`
    font-size: 3.5rem;
    color: ${props => props.theme.card.valueColor};
    font-weight: bold;
`;

const CardLabel = styled.span`
    text-transform: uppercase;
    color: var(--dark-grayish-blue-text);
    letter-spacing: 0.2rem;
    margin-bottom: 1.3rem;
`;

const CardFooter = styled.span`
    display: grid;
    grid-template-columns: 10px 1fr;
    grid-gap: 2px;
    align-items: center;
`;

const CardFooterText = styled.span`
    font-size: 0.8rem;
    color: ${props => props.value > 0 ? 'var(--lime-green)' : 'var(--bright-red)'};
    font-weight: bold;
`

const CardProfile = styled.span`
    font-size: 0.8rem;
    color: var(--toggle-light);
`

export { 
    CardContainer,
    CardHeader,
    CardValue,
    CardFooter,
    CardFooterText,
    CardLabel,
    CardProfile
};