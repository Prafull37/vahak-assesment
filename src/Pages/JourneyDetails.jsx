
import Input from "../components/Input";
import Select from "../components/Select";
import "../css/pages/journey.css";
import Button from "../components/Button";


const optionData = {
    common: {},
    options: [{ text: "", value: "" }, { text: "HatchBack", value: "HatchBack" }, { text: "SUV", value: "SUV" }, { text: "Sedan", value: "Sedan" }]
}



export default function JourneyDetails(props) {

    const { formik } = props;

    return (<div className="journey">
        <div className="location-container">
            <Input
                id={"source"}
                label="Source Location"
                onInputChange={formik.handleChange}
                onInputBlur={formik.handleBlur}
                value={formik.values?.journey?.source || ""}
                name="journey.source"
                wrapperClasses="input-box"
                classes="location-input"
                required={true}
            />

            <Input
                id={"destination"}
                label="Destination"
                onInputChange={formik.handleChange}
                onInputBlur={formik.handleBlur}
                value={formik.values?.journey?.destination || ""}
                name="journey.destination"
                wrapperClasses="input-box"
                classes="location-input"
                required={true}
            />
        </div>
        <div className="normal">
            <Select
                id={"cartype"}
                label="Car Type"
                onInputChange={(e) => {
                    formik.handleChange(e)
                }}
                onInputBlur={formik.handleBlur}
                value={formik.values?.journey?.cartype || ""}
                name="journey.cartype"
                classes="select-class"
                optionData={optionData}
                required={true}
            />


            <Input
                type="number"
                id={"nooftravellers"}
                label="No Of Travellers"
                onInputChange={formik.handleChange}
                onInputBlur={formik.handleBlur}
                value={formik.values.journey.noofTravellers || ""}
                name="journey.noofTravellers"
                classes="travellers"
                validate={(values) => validateTravellers(formik.values?.journey?.cartype, values)}
            />
            <Button
                disabled={!formik.isValid && Object.keys(formik.errors).includes("journey")}
                text="Enter Bid Details"
                style={{ marginTop: "16px" }}
                onButtonClick={() => { props.onButtonClick("price") }}
                type="button"
            />

        </div>


    </div>)
}



const validateTravellers = (cartype, values) => {
    if (values) {
        if (cartype === "SUV" && values > 6) {
            return "In Suv Travellers Can be 6";
        }
        if (cartype !== "SUV" && values > 4) {
            return "Travellers can not be greater than 4";
        }
    }
}