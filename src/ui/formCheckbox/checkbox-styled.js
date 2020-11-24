import styled from 'styled-components';

export const CheckboxRoot = styled.span`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    input[type='checkbox'] {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        opacity: 0;
        padding: 0;
        margin: 0;
        cursor: inherit;
    }
`;

export const CheckboxCheckbox = styled.span`
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    overflow: hidden;
    margin-right: 5px;
    border: 2px solid black;
    background-color: ${props => props.isChecked ? 'black' : 'white'};

    transition: all 500ms;

    &::after {
        content: '';
        position: absolute;
        top: 1px;
        left: ${props => props.isChecked ? '6px' :  '-100%'};
        width: 5px;
        height: 12px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;

export const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    padding: .2rem .7rem;
    margin-bottom: 5px;
    font-size: 1rem;
    font-weight: 500;
    color: black;
`;
