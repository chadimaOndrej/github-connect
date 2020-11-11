import React from 'react';
import { useFormik } from 'formik';
import { FormFieldset, FormInput, FormError, FormButton } from './search-bar-styled';
 
const validate = values => {
    const errors = {};
    if (!values.userName) {
        errors.userName = 'Required';
    } else if (values.userName.length > 20) {
        errors.userName = 'Must be 20 characters or less';
    }
    return errors;
};
 
const SearchBar = props => {
    const formik = useFormik({
        initialValues: {
            userName: '',
        },
        validate,
        onSubmit: values => {
           props.onFormSubmit(values.userName);
        },
   });

    return (
        <form onSubmit={formik.handleSubmit} className="ui form">
            <FormFieldset>
            <div className="field">
                <label>User Search:</label>
            </div>
            <div className="field">
                <FormInput
                    type="text"
                    name="userName"
                    onChange={formik.handleChange}
                    value={formik.values.userName}
                />            
                <FormButton type="submit">Find</FormButton>
            </div>
            </FormFieldset>
            {formik.errors.userName ? <FormError>{formik.errors.userName}</FormError> : null}
            {props.fetchError ? <FormError>User {formik.values.userName} no exist! Please try another name.</FormError> : null}
        </form>
    );
}

export default SearchBar;
