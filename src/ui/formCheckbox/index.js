import React from 'react';
import { CheckboxRoot, CheckboxCheckbox, CheckboxLabel } from './checkbox-styled';

const FormCheckbox = (props) => { 
    return (
        <CheckboxLabel>
            <CheckboxRoot>
                <input 
                    type="checkbox" 
                    name={props.name}
                    onChange={props.onChange} 
                    // checked={props.value || false}
                />
                <CheckboxCheckbox 
                    isChecked={props.value || false}/>
            </CheckboxRoot>
            {props.label}
        </CheckboxLabel>
    );
}; 

export default FormCheckbox;
