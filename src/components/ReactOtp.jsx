import { useEffect, useState } from 'react';
import OTPInput from "otp-input-react";

export default function ReactOtp(props){
    const [myotp,setOtp] = useState('');

    const onChange=(otp)=>{
        console.log(otp)
        setOtp(()=>otp)
        
    };

    useEffect(()=>{
        if(myotp.length===4){
          console.log("Yay")
            props.validateAndSubmit(myotp);
        }
    },[myotp])

  return (
    <div style={{ padding: 12,}}>
    <div style={{ marginBottom: 12 }}>{props.title}</div>
      <OTPInput 
        value={myotp}
        onChange={(e)=>onChange(e)} 
        autoFocus 
        OTPLength={4} 
        otpType="number" 
        disabled={false} 
        secure
        inputStyles={{
            marginLeft:"24px",
            marginRight:"12px",
            border: 0,
            borderBottom: "1px solid #cbcbcb",
        }}
        inputClassName="bottom__border"
         />
    </div>
  );
}