
import './App.css';
import FormContainer from './components/FormContainer';
import Select from "./components/Select";


const optionData={
  common:{},
  options:[{text:"HatchBack",value:"hb"},{text:"SUV",value:"suv"},{text:"Sedan",value:"sedan"}]
}

function App() {
  return (
    <div className="App">
      <FormContainer
      name="journey">
        {
          (formik) =>{
            console.log("formik",formik)
            return (<Select
              id={"cartype"}
              label="Car Type"
              onInputChange={(e)=>{console.log(e);
                formik.handleChange(e)}}
              onInputBlur={formik.handleBlur}
              value={formik.values.journey.cartype}
              name="journey.cartype"
              validate={(values)=>{
                if(!values){
                  return "source cannot be empty";
                }
            }}
            optionData={optionData}
            required={true}
            />)
          }
        }
      </FormContainer>
   
    </div>
  );
}

export default App;
