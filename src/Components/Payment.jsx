import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductContext from './ProductContext';

const Payment = ({ nextStep, setPaymentResponse }) => {
  const { subtotal, setCount,setCartItems } = useContext(ProductContext);
  const [paymentCancelled, setPaymentCancelled] = useState(false);
  const navigate = useNavigate(); // Use the useNavigate hook

  const loadRazorpay = () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onerror = () => {
      alert('Razorpay SDK failed to load. Are you online?');
    };
    script.onload = () => {
      const payAmount = subtotal * 100;
      const options = {
        key: "rzp_test_GvotXwaXCqSxvf",
        key_secret: "G3T9c7c9XRtpeygGDZnD0lsu",
        amount: payAmount,
        currency: "INR",
        name: "STARTUP_PROJECTS",
        description: "for testing purpose",
        handler: (response) => {
          setPaymentResponse(response.razorpay_payment_id);
          nextStep();
        },
        prefill: {
          name: "sairam",
          email: "sairam.gurunathan@gmail.com",
          contact: "9688238114"
        },
        notes: {
          address: "Razorpay Corporate office"
        },
        theme: {
          color: "#3caea3"
        },
        modal: {
          ondismiss: () => {
            setPaymentCancelled(true);
            setCount(0)
            setCartItems([])
            navigate(-1);
          }
        }
      };
      const pay = new window.Razorpay(options);
      pay.open();
    };
    document.body.appendChild(script);
  };

  useEffect(() => {
    loadRazorpay();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {paymentCancelled ? (
        <div className='d-flex align-items-center justify-content-center'>
          <h5>Your order is cancelled</h5>
        </div>
      ) : (
        <div className='d-flex align-items-center justify-content-center'>
          <h5>Processing Payment...</h5>
          </div>
      )}
    </div>
  );
};

export default Payment;
