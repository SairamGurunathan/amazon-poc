import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import ButtonTag from './ButtonTag'
import SelectTag from './SelectTag'

const SelectedProduct = ({image,title,description,price,category}) => {
  return (
    <>
        <Card className=''>
            
            <Row>
            <Col lg={6} xs={6}>
                <div className='d-flex align-items-center gap-2'>
            {image?.map((img,i)=>(
                    <img src={img} alt="img" key={i} style={{width:'180px',height:'180px'}}/>
                    ))}
                    </div>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <h4>₹{price}</h4>
                    <p>Category : <span className='fw-bold'>{category}</span></p>
            </Col>
            <Col lg={6}>
            <h4>₹{price}</h4>
            <p className='d-flex flex-row'>Quantity : {' '}<SelectTag title={1} option={[2,3,4,5]} className={'w-25'}/></p>
                <div className='d-flex flex-column align-items-center justify-content-center gap-2'>
                <ButtonTag label={'Add to Cart'} className={'bg-warning border-0 rounded-pill w-50'}/>
                <ButtonTag label={'Buy Now'} className={'bg-success border-0 rounded-pill w-50'}/>
                </div>
            </Col> 
            </Row>
            </Card>
    </>
  )
}

export default SelectedProduct