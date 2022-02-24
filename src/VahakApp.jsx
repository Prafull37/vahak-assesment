import JourneyDetails from "./Pages/JourneyDetails";


export default function VahakApp(props){

    return (<div className="container">
        
        <JourneyDetails formik={props.formik} updateCount={props.updateCount} />
    </div>)
}