
import { useState } from 'react';
import './App.css';
import FormContainer from './components/FormContainer';
import VahakApp from './VahakApp';
import Header from './components/Header';
import Banner from './components/Banner';



const BannerText = {
  journey: "Place Your Bid (1/4)",
  price: "Place Your Bid (2/4)",
  contact: "Place Your Bid (2/4)",
  otp: "Verify OTP  (3/4)",
  summary: "Summary and Submit Bid  (4/4)"
}

const FieldName = {
  journey: "journey",
  price: "price",
  contact: "user",
}



function App() {
  const [activeShow, setActiveShow] = useState("journey");

  const updateActiveShow = (value) => {
    setActiveShow(value)
  }


  return (
    <div className="App">
      <Header />
      <Banner text={BannerText[activeShow]} />
      <FormContainer
        name={FieldName[activeShow]}
        onSubmit={() => { }}
      >
        {
          (formik) => {
            return <VahakApp formik={formik} activeShow={activeShow} updateActiveShow={updateActiveShow} />
          }
        }
      </FormContainer>

    </div>
  );
}

export default App;
