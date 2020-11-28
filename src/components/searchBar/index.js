import React from 'react';
import { useFormik } from 'formik';
import { FormFieldset, FormInput, FormError, FormButton } from './search-bar-styled';
 
const validate = values => {
    const errors = {};
    if (!values.userName) {
        errors.userName = 'Required';
    } else if (!/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(values.userName)){
        errors.userName = 'No allowed characters';
    } else if (values.userName.length > 39) {
        errors.userName = 'Maximal GitHub user name length is 39 characters';
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
        </form>
    );
}

export default SearchBar;
