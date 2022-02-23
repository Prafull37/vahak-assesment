
import './App.css';
import FormContainer from './components/FormContainer';
import Checkbox from "./components/Checkbox";



function App() {
  return (
    <div className="App">
      <FormContainer
      name="journey">
        {
          (formik) =>{
            console.log("formik",formik)
            return (<Checkbox
              id={"noOftravellers"}
              label="No Of Travellers"
              onInputChange={(e)=>{console.log(e);
                formik.handleChange(e)}}
              onInputBlur={formik.handleBlur}
              value={formik.values.journey.nooftravellers}
              name="journey.nooftravellers"
              validate={(values)=>{
                if(!values){
                  return "source cannot be empty";
                }
            }}
            required={true}
            />)
          }
        }
      </FormContainer>
   
    </div>
  );
}

export default App;
