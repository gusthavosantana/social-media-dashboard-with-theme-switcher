import styled from "styled-components";

const CardContainer = styled.div`
    background-color: ${props => props.theme.card.bgColor};
    width: 200px;
    height: 120px;
    border-radius: 8px;
    display: grid;
    grid-template-columns: 80% 20%;
    grid-template-rows: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    padding: 1.2rem;

    @media(max-width: 430px) {
        width: 100%;
    }
`

const CardLabel = styled.span`
    color: ${props => props.theme.card.labelColor};
    font-size: 0.9rem;
    font-weight: bold;
`

const CardValue = styled.span`
    font-size: 2rem;
    font-weight: bold;
    color: ${props => props.theme.card.valueColor}
`

const CardVariation = styled.span`
    font-size: 0.8rem;
    display: grid;
    grid-template-columns: 10px 1fr;
    align-items: center;
`

const CardVariationValue = styled.span`
    color: ${props => props.value > 0 ? 'var(--lime-green)' : 'var(--bright-red)'}
`

export {
    CardContainer,
    CardLabel,
    CardValue,
    CardVariation,
    CardVariationValue
};