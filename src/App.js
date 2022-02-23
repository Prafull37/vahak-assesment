
import './App.css';
import FormContainer from './components/FormContainer';
function App() {
  return (
    <div className="App">
      <FormContainer
      name="journey">
        {
          (formik) =>{
            console.log(formik)
            return (<div>Hello World</div>)
          }
        }
      </FormContainer>
   
    </div>
  );
}

export default App;
