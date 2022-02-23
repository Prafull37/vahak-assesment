
import './App.css';
import FormContainer from './components/FormContainer';
import CurrencyInput from "./components/CurrencyInput";



function App() {

  return (
    <div className="App">
     <FormContainer
      name="journey">
        {
          (formik) =>{
            return <CurrencyInput />
          }
        }
      </FormContainer> 

    </div>
  );
}

export default App;
