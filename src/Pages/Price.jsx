
import InfoComponent, { makeChildFromArray } from "../components/InfoComponent"
import Divider from "../components/Divider";
import CurrencyInput from "../components/CurrencyInput";
import Checkbox from "../components/Checkbox";
import { useSelector } from "react-redux";
import Button from "../components/Button";

export default function Price(props) {
    const { formik } = props;
    const state = useSelector(state => state.vahakDetails)
    const {journey} = state;
    const data = [`${journey.source}-${journey.destination}` , `${!!journey.noofTravellers?Number(journey.noofTravellers )+" Persons":"0 Persons"} , ${journey.cartype}`];

    return (<div>
        <InfoComponent
            heading="Journey"
            onClick={() => { props.onButtonClick("journey")}}
            leftChild={makeChildFromArray(data)}
        />
        <Divider hide={false} />
        <div style={{ textAlign: "center" }}>
            <CurrencyInput
                id="currency"
                name="price.amount"
                onInputChange={formik.handleChange}
                value={formik.values?.price?.amount || ""}
            />

            <Divider hide={true} />

            <Checkbox
                id="negotiate"
                name={"price.negotiable"}
                label="Rate Negotiable"
                value={formik.values?.price?.negotiable || false}
                onInputChange={formik.handleChange}
            />
        </div>

        <Button
            disabled={false}
            text="Enter Bid Details"
            style={{ marginTop: "16px" }}
            onButtonClick={() => { props.onButtonClick("contact")}}
            type="button"
        />
    </div>)
}

