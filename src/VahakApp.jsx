import JourneyDetails from "./Pages/JourneyDetails";
import Button from "./components/Button";
import Price from "./Pages/Price"
import Contact from "./Pages/Contact";
import OtpAndVerifyPage from "./Pages/OtpAndVerifyPage";
import { useDispatch } from "react-redux";
import { addDetails } from "./redux/action";

export default function VahakApp(props){
    const dispatch = useDispatch();
    const {formik}=props;
    let show=props.activeShow; //props.price
    const moveToPage=(value)=>{
        console.log(value);
        const formData=formik.values[show]
        console.log(formData); 
        dispatch(addDetails({[show]:{...formData}}));
        props.updateActiveShow(value)
    }

    //console.log(props.activeShow)
    return (<div className="container">
        
        {show==="journey" && <JourneyDetails formik={formik} onButtonClick={(value)=>moveToPage(value)} />}
        {show==="price" && <Price formik={formik} onButtonClick={(value)=>moveToPage(value)} />}
        {show==="contact" && <Contact formik={formik} onButtonClick={(value)=>moveToPage(value)} />}
        {show==="otp" && <OtpAndVerifyPage formik={formik} onButtonClick={(value)=>moveToPage(value)} showOtp={true} />}
        {show==="summary" && <OtpAndVerifyPage formik={formik} onButtonClick={(value)=>{
            if(value === "success"){
                alert("Value Submitted")
            }else{
                moveToPage(value)
            }
            }} showOtp={false} />}
       
    </div>)
}


