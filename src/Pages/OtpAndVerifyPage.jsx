import InfoComponent,{makeChildFromArray} from '../components/InfoComponent';
import ReactOtp from "../components/ReactOtp";
import { EditButton } from '../components/InfoComponent';
import Divider from '../components/Divider';
import { Rupee } from '../components/CurrencyInput';
import { useSelector } from 'react-redux';
import Button from '../components/Button';

export default function OtpAndVerifyPage(props){
    const {formik} =props;
    const state = useSelector(state => state.vahakDetails);
    const { journey, price,contact } = state;
    console.log("yser",contact)
    const data1 = [`${journey.source}-${journey.destination}` , `${!!journey.noofTravellers?Number(journey.noofTravellers )+" Persons":"0 Persons"} , ${journey.cartype}`];
    const data2 = [contact.name,contact.mobileNo,contact.remarks];
    return (<div>
        <InfoComponent
                heading= "Journey"
                onClick={()=>{}}
                leftChild = {makeChildFromArray(data1)}
            />
         <Divider hide={false}/>
         <InfoComponent
                heading= "Bid Details"
                onClick={()=>{}}
                leftChild = {makeChildFromArray(data2)}
                rightChild={ <Rupee label={price.amount} fontSize={"32px"} />}
            />
            <Divider hide={false}/>
            {props.showOtp && (
                <ReactOtp 
                title={<TitleText mobileNo="123232232" onClick={()=>{}}/>}
                validateAndSubmit={(otp)=>{
                    console.log("adas",otp)
                    if(Number(otp)===1234) {
                    props.onButtonClick()
                    }
                }}
                />
            )}
        <Button
            disabled={false}
            text="Enter Bid Details"
            style={{ marginTop: "16px" }}
            onButtonClick={props.onButtonClick}
            type="button"
             />
    </div>)
}

const TitleText=(props)=>{
    return (<div>
        We have sent OTP to your mobile no. Please Enter OTP to submit Bid.<span style={{fontWeight:"bold"}}>{props.mobileNo}</span>
        <EditButton  onClick={props.onClick}/>
    </div>)
}

