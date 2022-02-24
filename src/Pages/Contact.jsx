

import InfoComponent, { makeChildFromArray } from "../components/InfoComponent"
import Divider from "../components/Divider";
import { Rupee } from "../components/CurrencyInput";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import "../css/pages/contact.css";
import { useSelector } from "react-redux";
import { FormikConsumer } from "formik";
import { useDispatch } from "react-redux";
import { addDetails, ADD_DETAILS } from "../redux/action";
import Button from '../components/Button';

export default function Contact(props) {
    const dispatch = useDispatch();
    const { formik } = props;

    const state = useSelector(state => state.vahakDetails);
    const { journey, price } = state;
    const data = [`${journey.source}-${journey.destination}` , `${!!journey.noofTravellers?Number(journey.noofTravellers )+" Persons":"0 Persons"} , ${journey.cartype}`];
    return (
        <>
            <InfoComponent
                heading="Journey"
                onClick={() => { }}
                leftChild={makeChildFromArray(data)}
            />
            <Divider hide={false} />

            <div style={{ textAlign: "center" }}>


                <Divider hide={true} />
                <Rupee label={price.amount} fontSize={"60px"} />
                <Checkbox
                    id="negotiate"
                    name={"price.negotiable"}
                    label="Rate Negotiable"
                    onInputChange={(e) => {
                        dispatch(addDetails({ "price": { amount: price.amount, negotiable: e.target.checked } }))
                    }
                    }
                    value={price.negotiable}
                />
            </div>

            <Divider />

            <div>
                <Input
                    id={"Mobile No"}
                    label="Mobile No"
                    onInputChange={formik.handleChange}
                    //onInputBlur={(e)=>{console.log(e);formik.handleBlur(e)}}
                    value={formik.values?.contact?.mobileNo || ""}
                    name="contact.mobileNo"

                    //   validate={(values)=>{
                    //     if(!values){
                    //       return "source cannot be empty";
                    //     }
                    // }}

                    middleComponent={<DisclaimerBox name="contact.updateonwp" onInputChange={formik.handleChange}
                        onInputBlur={formik.onInputBlur}
                        value={formik.values?.contact?.updateonwp || false} />}
                    required={true}
                />

                <Input
                    id={"name"}
                    label="Name"
                    onInputChange={formik.handleChange}
                    //onInputBlur={(e)=>{console.log(e);formik.handleBlur(e)}}
                    value={formik.values?.contact?.name || ""}
                    name="contact.name"
                    style={{ marginBottom: "32px" }}
                    //   validate={(values)=>{
                    //     if(!values){
                    //       return "source cannot be empty";
                    //     }
                    // }}
                    required={true}
                />

                <Input
                    id={"remarks"}
                    label="Remarks"
                    onInputChange={formik.handleChange}
                    //onInputBlur={(e)=>{console.log(e);formik.handleBlur(e)}}
                    value={formik.values?.contact?.remarks || ""}
                    name="contact.remarks"
                    //   validate={(values)=>{
                    //     if(!values){
                    //       return "source cannot be empty";
                    //     }
                    // }}
                    required={true}
                />

                <Button
                    disabled={false}
                    text="Enter Bid Details"
                    style={{ marginTop: "16px" }}
                    onButtonClick={props.onButtonClick}
                    type="button"
                />
            </div>

        </>)

}

export const DisclaimerBox = (props) => {
    return (<div className="disclaimer-box" >
        <Checkbox name={props.name} onInputChange={props.handleChange} value={props.value}
            onInputChange={props.onInputChange}
            onInputBlur={props.onInputBlur}
            label="Get Updates on Whatsapp" />
    </div>)
}

