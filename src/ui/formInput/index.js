import React from 'react';
import { StyledInput } from './input-styled';

const FormInput = (props) => { 
    return (
        <StyledInput
            type="text"
            name={props.name}
            onChange={props.onInputChange}
            value={props.values}
        />   
    );
}; 

export default FormInput;
