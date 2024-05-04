import React from 'react'
import ButtonTag from './ButtonTag'
import { footerList } from '../Constant/FooterList'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../Assets/PngItem_12080.png'
import { Icon } from '@iconify/react'

const Footer = () => {
  return (
    <>
    <ButtonTag label={'Back to top'} type={'button'} className={'btn-back w-100 text-white border-0 rounded-0 py-3'}/>
    <div style={{backgroundColor:'#232f3e'}} className='text-white'>
      <Container>
      <Row>
      {
        footerList?.map((option,index)=>(
          <Col>
          <ul key={index} className='footer-list my-5'>
            <h6 className='fw-bold'>{option?.heading}</h6>
            {option?.list?.map((li)=>(<li><Link className='text-decoration-none text-white'>{li}</Link></li>))}
          </ul>
          </Col>
        ))
      }
      </Row>
      </Container>
      <hr />
      <div className='d-flex flex-row gap-2 align-items-center justify-content-center'>
        <div className='pe-5'>
      <img
          alt="logo"
          src={logo}
          width="120"
          height="30"
          className="d-inline-block align-top ps-3"
        />
        </div>
        <div className='d-flex flex-row gap-2'>
        <ButtonTag label={'English'} className={'d-flex align-items-center rounded-0 gap-2'} icon={<Icon icon="ph:globe"  style={{color: 'white'}} />} variant={"outline-light"}/>
        <ButtonTag label={'India'} className={'d-flex align-items-center rounded-0 gap-2'} icon={<Icon icon="twemoji:flag-india" className="fs-5"/>} variant={"outline-light"}/>
      </div>
      </div>
    </div>
    </>
  )
}

export default Footer