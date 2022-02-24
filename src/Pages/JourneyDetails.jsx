
import Input from "../components/Input";
import Select from "../components/Select";
import "../css/pages/journey.css";
import Button from "../components/Button";


const optionData={
  common:{},
  options:[{text:"HatchBack",value:"hb"},{text:"SUV",value:"suv"},{text:"Sedan",value:"sedan"}]
}

 

export default function JourneyDetails(props){
    const {formik} = props;
    return (<div className="journey">
        <div className="location-container">
         <Input 
              id={"source"}
              label="Source Location"
              onInputChange={formik.handleChange}
              //onInputBlur={(e)=>{console.log(e);formik.handleBlur(e)}}
              value={formik.values.journey.source}
              name="journey.source"
              wrapperClasses="input-box"
              classes="location-input"
            //   validate={(values)=>{
            //     if(!values){
            //       return "source cannot be empty";
            //     }
            // }}
            required={true}
            / >
            
            <Input 
              id={"destination"}
              label="Destination"
              onInputChange={formik.handleChange}
              //onInputBlur={(e)=>{console.log(e);formik.handleBlur(e)}}
              value={formik.values.journey.destination}
              name="journey.destination"
              wrapperClasses="input-box"
              classes="location-input"
            //   validate={(values)=>{
            //     if(!values){
            //       return "source cannot be empty";
            //     }
            // }}
            required={true}
            / >
        </div>
    <div className="normal">
      <Select
              id={"cartype"}
              label="Car Type"
              onInputChange={(e)=>{console.log(e);
                formik.handleChange(e)}}
            //   onInputBlur={formik.handleBlur}
              value={formik.values.journey.cartype}
              name="journey.cartype"
              classes="select-class"
            //   validate={(values)=>{
            //     if(!values){
            //       return "source cannot be empty";
            //     }
            // }}
            optionData={optionData}
            required={true}
            />

            
<Input 
              id={"nooftravellers"}
              label="No Of Travellers"
              onInputChange={formik.handleChange}
              //onInputBlur={(e)=>{console.log(e);formik.handleBlur(e)}}
              value={formik.values.journey.nooftravellers}
              name="journey.nooftravellers"
              classes="travellers"
              //wrapperClasses="input-box"
            //   validate={(values)=>{
            //     if(!values){
            //       return "source cannot be empty";
            //     }
            // }}
            / >

       
    </div>


    </div>)
}