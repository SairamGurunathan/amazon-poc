import React, { useState } from 'react';
import { Stepper, Step } from 'react-form-stepper';
import ShippingAddress from './ShippingAddress';
import Payment from './Payment';
import Confirmation from './Confirmation';
import { useContext } from 'react';
import ProductContext from './ProductContext';

const StepperCheckOut =()=> {
    const [activeStep, setActiveStep] = useState(0);
    const {subTotal} = useContext(ProductContext)
    const [address, setAddress] = useState({
      name:'',
      address:'',
      mobile:'',
    });
    const [paymentResponse, setPaymentResponse] = useState(null);
  
    const nextStep = () => {
      setActiveStep((prev) => prev + 1);
    };
  
    const renderStepContent = (step) => {
      switch (step) {
        case 0:
          return <ShippingAddress nextStep={nextStep} setAddress={setAddress} address={address} subTotal={subTotal}/>;
        case 1:
          return <Payment nextStep={nextStep} setPaymentResponse={setPaymentResponse} />;
        case 2:
          return <Confirmation paymentResponse={paymentResponse} address={address} />;
        default:
          return null;
      }
    };
  
    return (
      <div className="App">
        <Stepper activeStep={activeStep}>
          <Step label="Shipping Address" />
          <Step label="Payment" />
          <Step label="Confirmation" />
        </Stepper>
        {renderStepContent(activeStep)}
      </div>
    );
}

export default StepperCheckOut;
