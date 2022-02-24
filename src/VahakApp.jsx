import JourneyDetails from "./Pages/JourneyDetails";
import Price from "./Pages/Price"
import Contact from "./Pages/Contact";
import OtpAndVerifyPage from "./Pages/OtpAndVerifyPage";
import { useDispatch } from "react-redux";
import { addDetails } from "./redux/action";
import { useCallback,memo } from "react";

const ButtonText={
    journey:"Enter Bid Details",
    price:"Next",
    contact:"Verify Via OTP",
    otp:"Verify Via OTP",
    summar :"Submit Bid"
}

 function VahakApp(props) {
    const dispatch = useDispatch();
    const { formik } = props;

    let show = props.activeShow;
    const updateAndActive =props.updateActiveShow;

    const moveToPage = useCallback((value) => {
        const formData = formik.values[show]
        dispatch(addDetails({ [show]: { ...formData } }));
        updateAndActive(value)
    },[dispatch,formik.values,show,updateAndActive]);
  
    let ButtonLabel=ButtonText[show];

    return (<div className="container">

        {show === "journey" && <JourneyDetails formik={formik} onButtonClick={moveToPage} buttonLabel={ButtonLabel}/>}
        {show === "price" && <Price formik={formik} onButtonClick={moveToPage}  buttonLabel={ButtonLabel}/>}
        {show === "contact" && <Contact formik={formik} onButtonClick={moveToPage} buttonLabel={ButtonLabel}/>}
        {show === "otp" && <OtpAndVerifyPage formik={formik} onButtonClick={moveToPage} showOtp={true} buttonLabel={ButtonLabel}/>}
        {show === "summary" && <OtpAndVerifyPage formik={formik} onButtonClick={(value) => {
            if (value === "success") {
                alert("Value Submitted")
            } else {
                moveToPage(value)
            }
        }} showOtp={false} buttonLabel={ButtonLabel}/>}

    </div>)
}


export default VahakApp

