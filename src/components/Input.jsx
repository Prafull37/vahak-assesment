import { Field } from "formik";
import TextError from "./TextError";
import "../css/components/input.css";

export default function Input(props){

    const {name,type="text",id,validate,onInputChange,onInputBlur,value,classes,style,required,placeholder="",max} = props;
    const inputClass = !!classes ? classes:"";

    return (
        <div className={`input-wrapper ${props.wrapperClasses || ""}`}>
            <label htmlFor={props.id}
            className={`label ${props.labelClasses || ""}`}>{props.label}{required?<span className="star">*</span>:""}</label>
            <Field 
                name={name}
                type={type}
                id={id}
                className ={`input ${inputClass}`}
                validate={validate}
                onChange={onInputChange}
                onBlur={onInputBlur}
                placeholder={placeholder}
                value={value}
                style={style}
                max={max}
            />
            {!!props.middleComponent && props.middleComponent}
            <TextError name={props.name}/>
        </div>
    )
}

