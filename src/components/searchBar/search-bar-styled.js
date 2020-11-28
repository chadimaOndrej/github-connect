import styled from 'styled-components';

export const FormFieldset = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`;

export const FormError = styled.div`
    font-size: 13px;
    line-height: 1.2;
    color: red;
`;

export const FormInput = styled.input`
    box-sizing: border-box;    
    height: 30px;
    margin-left: 10px;
    font-size: 16px;
    border: 2px solid black;
`;

export const FormButton = styled.button`
    position: relative;
    display: inline-block;
    height: 30px;
    padding: 0 20px;
    overflow: hidden;

    font-weight: bold;
    font-size: 15px;
    line-height: 26px;
    text-align: center;
    text-decoration: none;
    color: white;

    border: 2px solid black;
    background-color: black;   
    outline: 0;

    cursor: pointer;
    transition: all 0.5s;
    -webkit-appearance: none;

    &:hover {
        color: black; 
        background-color: white;
    }
`;
