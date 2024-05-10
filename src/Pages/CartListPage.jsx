import { Icon } from '@iconify/react';
import React from 'react';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import ButtonTag from '../Components/ButtonTag';

const CartListPage = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <>
      <Row >
        <Col lg={6}>
        <Card>
        <CardBody className='d-flex flex-row justify-content-center align-items-center gap-3'>
          <img src={cartItems[0]?.images[0]} alt='cart' style={{width:'150px',height:'150px'}}/>  
          <h3 className='d-flex flex-row align-items-center text-nowrap'><Icon icon="lets-icons:check-fill"  style={{color: '#087e63'}} />Added to Cart</h3>
        </CardBody>
      </Card>
        </Col>
        <Col lg={6}>
        <Card className='h-100'>
          <Row>
            <Col className='d-flex justify-content-center align-items-center '>
            <p className='p-5'>Part of your order qualifies for FREE Delivery. Select this option at checkout. Details</p>
            </Col>
            <Col>
            <CardBody className='d-flex flex-column justify-content-center align-items-center'>
          <h3>Cart subtotal:  {cartItems[0]?.subtotal}</h3>
          <div className="d-flex flex-column align-items-center gap-2 w-100">    
          <ButtonTag label={'Proceed to Buy'}
          className={'bg-warning border-0 rounded-pill w-100 text-nowrap'}/> 
          <ButtonTag label={'Back'} className={'bg-success border-0 rounded-pill w-100'}/>   
          </div>  
        </CardBody>
            </Col>
          </Row>
        
      </Card>
        </Col>
      </Row>      
    </>
  );
};

export default CartListPage;
