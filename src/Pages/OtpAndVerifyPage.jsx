import InfoComponent,{makeChildFromArray} from '../components/InfoComponent';
import ReactOtp from "../components/ReactOtp";
import { EditButton } from '../components/InfoComponent';
import Divider from '../components/Divider';
import { Rupee } from '../components/CurrencyInput';
export default function OtpAndVerifyPage(props){
    const {formik} =props;

    return (<>
        <InfoComponent
                heading= "Journey"
                onClick={()=>{}}
                leftChild = {makeChildFromArray()}
            />
         <Divider hide={false}/>
         <InfoComponent
                heading= "Bid Details"
                onClick={()=>{}}
                leftChild = {makeChildFromArray()}
                rightChild={ <Rupee label="1234" fontSize={"32px"} />}
            />
            <Divider hide={false}/>
            {props.showOtp && (
                <ReactOtp 
                title={<TitleText mobileNo="123232232" onClick={()=>{}}/>}
                validateAndSubmit={()=>{props.submit()}}
                />
            )}
    </>)
}

const TitleText=(props)=>{
    return (<div>
        We have sent OTP to your mobile no. Please Enter OTP to submit Bid.<span style={{fontWeight:"bold"}}>{props.mobileNo}</span>
        <EditButton  onClick={props.onClick}/>
    </div>)
}

