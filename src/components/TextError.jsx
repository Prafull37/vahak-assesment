import React from 'react'
import {ErrorMessage} from 'formik';
import "../css/components/textError.css";

function TextError (props) {

  const {customMessage} = props;
  return <ErrorMessage name={props.name} >{(message)=>(<div className='error'>{customMessage || message}</div>)}</ErrorMessage>
}

export default TextError