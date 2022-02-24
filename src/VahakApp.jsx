import JourneyDetails from "./Pages/JourneyDetails";
import Button from "./components/Button";
import Price from "./Pages/Price"
import Contact from "./Pages/Contact";
import OtpAndVerifyPage from "./Pages/OtpAndVerifyPage";

export default function VahakApp(props){
    let show="otp"; //props.price
    return (<div className="container">
        
        {show==="journey" && <JourneyDetails formik={props.formik} updateCount={props.updateCount} />}
        {show==="price" && <Price formik={props.formik} updateCount={props.updateCount} />}
        {show==="contact" && <Contact formik={props.formik} updateCount={props.updateCount} />}
        {show==="otp" && <OtpAndVerifyPage formik={props.formik} updateCount={props.updateCount} showOtp={true} />}
        <Button
            disabled={true}
            text="Enter Bid Details"
            style={{marginTop:"16px"}}
        />
    </div>)
}