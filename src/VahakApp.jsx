import JourneyDetails from "./Pages/JourneyDetails";
import Button from "./components/Button";
import Price from "./Pages/Price"

export default function VahakApp(props){
    let show="price"; //props.price
    return (<div className="container">
        
        {show==="journey" && <JourneyDetails formik={props.formik} updateCount={props.updateCount} />}
        {show==="price" && <Price formik={props.formik} updateCount={props.updateCount} />}
        
        <Button
            disabled={true}
            text="Enter Bid Details"
            style={{marginTop:"16px"}}
        />
    </div>)
}