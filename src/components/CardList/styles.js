import styled from "styled-components";

const CardListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    
    @media(max-width: 880px) {
        grid-template-columns: repeat(2,1fr);
    }
    @media(max-width: 430px) {
        grid-template-columns: 1fr;
        justify-content: center;
        align-items: center;
    }
`
export { CardListContainer };