import { Field,ErrorMessage } from "formik";


export default function Input(props){

    return (
        <div className="input-wrapper">
            <Field type="checkbox"/>
            <label htmlFor={props.id}>{props.label}</label>
            <ErrorMessage name={props.name} />
        </div>
    )
}