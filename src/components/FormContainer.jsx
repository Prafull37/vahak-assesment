
import { Form, Formik } from 'formik';
// eslint-disable-next-line
import * as Yup from 'yup';
import useInitState from "./useInitState";
import "../css/components/formcontainer.css";
import validationSchema from "../validation/main";

export default function FormContainer(props) {
  const initState = useInitState(props.name);
  const { onSubmit } = props;

  return (<Formik
    initialValues={initState}
    onSubmit={onSubmit}
    enableReinitialize
    validationSchema={validationSchema}
    validateOnMount
  >
    {(formik) => <Form>
      <div className="form-wrapper">
        {props.children(formik)}
      </div>
    </Form>}

  </Formik>)
}



