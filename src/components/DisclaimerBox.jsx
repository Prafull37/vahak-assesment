import { Field } from "formik";
import TextError from "./TextError";
import "../css/components/input.css";
import Checkbox from "../components/Checkbox"
import "../css/components/disclaimer.css";


export default function DisclaimerBox(props){
    
     const {name,
        checkboxName,
        id,checkBoxId,validate,onInputChange,onCheckBoxChange,onInputBlur,onCheckBoxBlur,value,checked,checkboxLabel,classes,style,required,placeholder="",max} = props;
    
    const validation={};

    if(required){
        validation.validate =validate;
    }
    return(
        <div className={`input-wrapper disclaimer ${props.wrapperClasses || ""}`}>
            <label htmlFor={props.id}
            className={`label ${props.labelClasses || ""}`}>{props.label}{required?<span className="star">*</span>:""}</label>
            <Field 
                name={name}
                type={"number"}
                id={id}
                className ={`input ${classes || ""}`}
                validate={validate}
                onChange={onInputChange}
                onBlur={onInputBlur}
                placeholder={placeholder}
                value={value}
                style={{width: "94%",...style}}
                max={max}
            />
            <div className="checkbox-background">
                <Checkbox id="checkboxId" name={checkboxName} onInputChang={onCheckBoxChange}
                    onInputBlur={onCheckBoxBlur}
                    value={checked}
                    label={checkboxLabel}
                    />
            </div>
            <TextError name={props.name}/>
        </div>
    )
}