import { useEffect, useState } from 'react';
import OTPInput from "otp-input-react";

export default function ReactOtp(props) {
  const [myotp, setOtp] = useState('');
  const { validateAndSubmit } = props
  const onChange = (otp) => {
    setOtp(() => otp)

  };

  useEffect(() => {
    if (myotp.length === 4) {
      validateAndSubmit(myotp);
    }
  }, [myotp, validateAndSubmit])

  return (
    <div style={{ padding: 12, }}>
      <div style={{ marginBottom: 12 }}>{props.title}</div>
      <OTPInput
        value={myotp}
        onChange={(e) => onChange(e)}
        autoFocus
        OTPLength={4}
        otpType="number"
        disabled={false}
        secure
        inputStyles={{
          display: "flex",
          justifyContent: "center",
          flexGrow: 1,
          marginLeft: "14px",
          marginRight: "8px",
          border: 0,
          borderBottom: "1px solid #cbcbcb",
        }}
        inputClassName="bottom__border"
      />
    </div>
  );
}