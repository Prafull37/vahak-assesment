

import InfoComponent, { makeChildFromArray } from "../components/InfoComponent"
import Divider from "../components/Divider";
import { Rupee } from "../components/CurrencyInput";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import "../css/pages/contact.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addDetails } from "../redux/action";
import Button from '../components/Button';

import DisclaimerBox from "../components/DisclaimerBox";

export default function Contact(props) {
    const dispatch = useDispatch();
    const { formik } = props;

    const state = useSelector(state => state.vahakDetails);
    const { journey, price } = state;
    const data = [`${journey.source}-${journey.destination}` , `${!!journey.noofTravellers?Number(journey.noofTravellers )+" Persons":"0 Persons"} , ${journey.cartype}`];
    return (
        <div className="contact">
            <InfoComponent
                heading="Journey"
                onClick={() => { props.onButtonClick("journey")}}
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
                <DisclaimerBox
                    id={"Mobile No"}
                    label="Mobile No"
                    checkboxLabel="Get Updates on Whatsappasd"
                    onInputChange={formik.handleChange}
                    onCheckBoxChange ={formik.handleChange}
                    onCheckBoxBlur ={formik.handleBlur}
                    checked ={formik.values?.contact?.updateonwp || false}
                    onInputBlur={formik.handleBlur}
                    value={formik.values?.contact?.mobileNo || ""}
                    name="contact.mobileNo"
                    checkboxName="contact.updateonwp"
                    required={false}
                />

                <Input
                    id={"name"}
                    label="Name"
                    onInputChange={formik.handleChange}
                    onInputBlur={formik.handleBlur}
                    value={formik.values?.contact?.name || ""}
                    name="contact.name"
                    wrapperClasses="margin-bottom32"
                    required={true}
                />

                <Input
                    id={"remarks"}
                    label="Remarks"
                    onInputChange={formik.handleChange}
                    onInputBlur={formik.handleBlur}
                    value={formik.values?.contact?.remarks || ""}
                    name="contact.remarks"
                />

                <Button
                    disabled={!formik.isValid && Object.keys(formik.errors).includes("contact")}
                    text={props.buttonLabel}
                    style={{ marginTop: "16px" }}
                    onButtonClick={() => { props.onButtonClick("otp")}}
                    type="button"
                />
            </div>

        </div>)

}



