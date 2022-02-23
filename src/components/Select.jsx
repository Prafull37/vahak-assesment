import {Field,ErrorMessage}  from 'formik';
import TextError from './TextError';
import '../css/components/select.css';

export default function Select(props){
    const {name,type,id,validate,onInputChange,onInputBlur,value,classes,style,required=false,optionData} = props;
    const inputClass = !!classes ? classes:"";
    const validation={};

    if(required){
        validation.validate =validate;
    }

    return (
        <div className={`input-wrapper select-wrapper${props.wrapperClasses || ""}`}>
            <label htmlFor={props.id}
            className={`label ${props.labelClasses}`}>{props.label}{required?<span className="star">*</span>:""}</label>
            <Field 
                name={name}
                type={type}
                id={id}
                className ={`select ${inputClass}`}
                onChange={onInputChange}
                onBlur={onInputBlur}
                value={value}
                style={style}
                {...validation.validate}
                as="select"
            >
                <Options options={optionData} />
            </Field>
            <TextError name={props.name}/>
        </div>
    )
}

const Options = props=>{
    const {common={}} = props.options
    const {style={},classes=""}=common; //common style/classes
    return props.options.options.map((option,index)=>(
        <option key={index} style={{...style,...option.style}} className={`option ${classes} ${option.classes}`} value={option.value}>
            {option.text}
        </option>
    ))
}