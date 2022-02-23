import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {Form, Formik} from 'formik';
import useInitState from "./useInitState";
import "../css/components/formcontainer.css";

export default function FormContainer(props){
    const initState= useInitState(props.name);
    const {onSubmit} = props;
    console.log("init",initState)
    return (<Formik
            initialValues={initState}
            onSubmit
            enableReinitialize
        >
            {(formik)=><Form>
                <div className="form-wrapper">
                    {props.children(formik)}
                </div>
            </Form>}

    </Formik>)
}

/***
 * <FormContainer
      name="journey">
        {
          (formik) =>{
            console.log("formik",formik)
          }
        }
      </FormContainer>
 */


