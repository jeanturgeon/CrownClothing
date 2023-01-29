import styled from "styled-components";

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    row-gap: 50px;  
`;

export const CategoryName = styled.h2`
    font-size: 42px;
    margin-bottom: 25px;
    text-transform: uppercase;
    text-align: center;
`;