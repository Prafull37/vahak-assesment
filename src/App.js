
import './App.css';
import FormContainer from './components/FormContainer';
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <FormContainer
      name="journey">
        {
          (formik) =>{
            console.log("formik",formik)
            return (<Input 
              id={"source"}
              label="Source Location"
              onInputChange={formik.handleChange}
              onInputBlur={(e)=>{console.log(e);formik.handleBlur(e)}}
              value={formik.values.journey.source}
              name="journey.source"
              validate={(values)=>{
                if(!values){
                  return "source cannot be empty";
                }
            }}
            required={true}
            / >)
          }
        }
      </FormContainer>
   
    </div>
  );
}

export default App;
