import styled from 'styled-components';


export const FilterBar = styled.div`
    padding: 10px; 
    border-bottom: 2px solid black;
`;

export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 920px;
    margin: 0 auto;
`;

export const FilterError = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export const FilterErrorText = styled.div`
    margin-left: 10px;
    font-size: 13px;
    line-height: 1.2;
    color: red;
`;
