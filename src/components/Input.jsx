import { Field } from "formik";
import TextError from "./TextError";
import "../css/components/input.css";

export default function Input(props){

    const {name,type,id,validate,onInputChange,onInputBlur,value,classes,style,required,placeholder=""} = props;
    const inputClass = !!classes ? classes:"";

    return (
        <div className={`input-wrapper ${props.wrapperClasses}`}>
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
            />
            {!!props.middleComponent && props.middleComponent}
            <TextError name={props.name}/>
        </div>
    )
}

/**
 * <Input 
              id={"source"}
              label="Source Location"
              onInputChange={formik.handleChange}
              onInputBlur={(e)=>{console.log(e);formik.handleBlur(e)}}
              value={formik.values.journey.source}
              name="journey.source"
              validate={(values)=>{
                if(!values){
                  return "source cannot be empty";
                }
            }}
            required={true}
            / >
 */