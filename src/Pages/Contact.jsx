

import InfoComponent,{makeChildFromArray}from "../components/InfoComponent"
import Divider from "../components/Divider";
import { Rupee } from "../components/CurrencyInput";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import "../css/pages/contact.css";

export default function Contact(props){
    const {formik} =props;
    return (
        <>
            <InfoComponent
                heading= "Journey"
                onClick={()=>{}}
                leftChild = {makeChildFromArray()}
            />
            <Divider hide={false}/>

            <div style={{textAlign:"center"}}>
            

        <Divider hide={true}/>
        <Rupee label="1234" fontSize={"60px"} />
        <Checkbox
        id="negotiate"
        name={"price.negotiable"}
        label="Rate Negotiable"
        onInputChange={formik.handleChange}
        />
        </div>

        <Divider />

        <div>
         <Input 
              id={"Mobile No"}
              label="Mobile No"
              onInputChange={formik.handleChange}
              //onInputBlur={(e)=>{console.log(e);formik.handleBlur(e)}}
              value={formik.values?.user.mobileNo}
              name="user.mobileNo"

            //   validate={(values)=>{
            //     if(!values){
            //       return "source cannot be empty";
            //     }
            // }}

            middleComponent={<DisclaimerBox name="updateonwp"  onInputChange={formik.handleChange} /> }
            required={true}
            / >
            
            <Input 
              id={"name"}
              label="Name"
              onInputChange={formik.handleChange}
              //onInputBlur={(e)=>{console.log(e);formik.handleBlur(e)}}
              value={formik.values.user.name}
              name="user.name"
            style={{marginBottom:"32px"}}
            //   validate={(values)=>{
            //     if(!values){
            //       return "source cannot be empty";
            //     }
            // }}
            required={true}
            / >

        <Input 
              id={"remarks"}
              label="Remarks"
              onInputChange={formik.handleChange}
              //onInputBlur={(e)=>{console.log(e);formik.handleBlur(e)}}
              value={formik.values.user.remarks}
              name="user.remarks"
            //   validate={(values)=>{
            //     if(!values){
            //       return "source cannot be empty";
            //     }
            // }}
            required={true}
            / >
        </div>
    
        </>)

}

export const DisclaimerBox=(props)=>{
    return(<div className="disclaimer-box" >
            <Checkbox name={props.name}  onInputChange={props.handleChange} label="Get Updates on Whatsapp" />
        </div>)
}

