
import InfoComponent,{makeChildFromArray}from "../components/InfoComponent"
import Divider from "../components/Divider";
import CurrencyInput from "../components/CurrencyInput";
import Checkbox from "../components/Checkbox";

export default function Price(props){
    const {formik} =props;
    return (<div>
        <InfoComponent
        heading= "Journey"
        onClick={()=>{}}
        leftChild = {makeChildFromArray()}
         />
        <Divider hide={false}/>
        <div style={{textAlign:"center"}}>
        <CurrencyInput
            id="currency"
            name="price.amount"
            onInputChange={()=>{}}
            
        />

        <Divider hide={true}/>

        <Checkbox 
        id="negotiate"
        name={"price.negotiable"}
        label="Rate Negotiable"
        onInputChange={formik.handleChange}
        />
        </div>
       

    </div>)
}

