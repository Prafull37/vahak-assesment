import InfoComponent, { makeChildFromArray } from '../components/InfoComponent';
import ReactOtp from "../components/ReactOtp";
import { EditButton } from '../components/InfoComponent';
import Divider from '../components/Divider';
import { Rupee } from '../components/CurrencyInput';
import { useSelector } from 'react-redux';
import Button from '../components/Button';

export default function OtpAndVerifyPage(props) {

    const state = useSelector(state => state.vahakDetails);
    const { journey, price, contact } = state;

    const data1 = [`${journey.source}-${journey.destination}`, `${!!journey.noofTravellers ? Number(journey.noofTravellers) + " Persons" : "0 Persons"} , ${journey.cartype}`];
    const data2 = [contact.name, contact.mobileNo, contact.remarks];
    return (<div>
        <InfoComponent
            heading="Journey"
            onClick={() => { props.onButtonClick("journey") }}
            leftChild={makeChildFromArray(data1)}
        />
        <Divider hide={false} />
        <InfoComponent
            heading="Bid Details"
            onClick={() => { props.onButtonClick("price") }}
            leftChild={makeChildFromArray(data2)}
            rightChild={<Rupee label={price.amount} fontSize={"32px"} />}
        />
        <Divider hide={false} />
        {props.showOtp && (<>
            <ReactOtp
                title={<TitleText mobileNo="123232232" onClick={() => { props.onButtonClick("contact") }} />}
                validateAndSubmit={(otp) => {
                    if (Number(otp) === 1234) {
                        props.onButtonClick("summary")
                    }
                }}
            />
            <Divider hide={true}/>
            <a href="https://github.com" target="_blank" rel="noreferrer"style={{color:"#0069d9",textDecoration:"underline"}}>Resend OTP</a>
        </>)}
        <Button
            disabled={false}
            text={props.buttonLabel}
            style={{ marginTop: "16px" }}
            onButtonClick={() => { props.onButtonClick(props.showOtp ? "summary" : "success") }}
            type="button"
        />
    </div>)
}

const TitleText = (props) => {
    return (<div>
        We have sent OTP to your mobile no. Please Enter OTP to submit Bid.<span style={{ fontWeight: "bold" }}>{props.mobileNo}</span>
        <EditButton onClick={props.onClick} />
    </div>)
}

