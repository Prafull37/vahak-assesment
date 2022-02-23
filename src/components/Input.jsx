import { Field,ErrorMessage } from "formik";


export default function Input(props){

    return (
        <div className="input-wrapper">
            <label htmlFor={props.id}>{props.label}</label>
            <Field />
            <ErrorMessage name={props.name} />
        </div>
    )
}