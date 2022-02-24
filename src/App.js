
import { useState } from 'react';
import './App.css';
import FormContainer from './components/FormContainer';
import VahakApp from './VahakApp';
import Header from './components/Header';
import Banner from './components/Banner';

function App() {
  const [count,setCount] = useState(1);

  const updateCount = ()=>{
    if(count<=4){
      setCount(count=>count+1)
    }
  }

  return (
    <div className="App">
      <Header />
      <Banner  text={`Place Your Bid (${count}/4)`}/>
     <FormContainer
      name="user">
        {
          (formik) =>{
            return <VahakApp formik = {formik} updateCount={updateCount}/>
          }
        }
      </FormContainer> 

    </div>
  );
}

export default App;
