import {Field,ErrorMessage}  from 'formik';

export default function Select(props){
    return (
        <div className="select-wrapper">
            <label htmlFor={props.id}>{props.label}</label>
            <Field as="select">
                {props.children}
            </Field>
            <ErrorMessage name={props.name} />
        </div>
    )
}