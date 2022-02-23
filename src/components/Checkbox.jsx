import { Field,ErrorMessage } from "formik";
import "../css/components/checkbox.css";

export default function Input(props){
    const {name,id,validate,onInputChange,onInputBlur,value,classes="",style,labelClasses="",required=false} = props;
    const validation={};

    if(required){
        validation.validate =validate;
    }

    return (
        <div className="checkbox-wrapper">
            <Field type="checkbox"
            name={name} 
            id={id}
            onChange={onInputChange}
            onBlur ={onInputBlur}
            checked={Boolean(value)}
            style={style}
            className={`checkbox checkbox-${classes} `}
            {...validation}
            />
            <label className={`checkbox-label ${labelClasses }`}htmlFor={id}>{props.label}</label>
            <ErrorMessage name={props.name} />
        </div>
    )
}

/***
 * 
 * <Checkbox
              id={"noOftravellers"}
              label="No Of Travellers"
              onInputChange={(e)=>{console.log(e);
                formik.handleChange(e)}}
              onInputBlur={formik.handleBlur}
              value={formik.values.journey.nooftravellers}
              name="journey.nooftravellers"
              validate={(values)=>{
                if(!values){
                  return "source cannot be empty";
                }
            }}
            required={true}
            />
 * 
 */