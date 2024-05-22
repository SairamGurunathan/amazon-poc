import React from 'react'
import { Card, CardBody, CardTitle } from 'react-bootstrap'
import InputBox from '../Components/InputBox'
import ButtonTag from '../Components/ButtonTag'
import { Link } from 'react-router-dom'
import logo from '../Assets/amazon-in-logo.png'

const LoginPage = () => {
  return (
    <>
    <div className='d-flex flex-column align-items-center justify-contnet-between bg-white vh-100'>

    <img src={logo} alt='img' style={{width:'180px', height:'50px'}} className='my-4'/>
        <Card className='border border-info mt-2 rounded-3' style={{width:'22rem'}}>
            <CardBody className='m-2'>
            <CardTitle>
                <h4>Sign in</h4>
                </CardTitle>
                <div>
                    <div>
                    <label className='fw-bold fs-6'>Email or mobile phone number</label>
                    <InputBox type={'text'}/>
                    </div>
                    <div className='mt-2'>
                    <label className='fw-bold fs-6'>Password</label>
                    <InputBox type={'password'}/>
                    </div>
                </div>
                <div>
                <ButtonTag label={'Sign in'} className={'w-100 my-3 bg-warning border-0 text-dark'}/>
                </div>
                <small className='fs-12'>By continuing, you agree to Amazon's <span><Link className='text-decoration-none link-hover card-link'>Conditions of Use</Link></span> and <span><Link className='text-decoration-none link-hover card-link'>Privacy Notice</Link></span>.</small>
                <hr/>
                <div className='d-flex flex-column gap-2'>
                    <small className='fw-bold'>Buying for work?</small>
                    <Link className='text-decoration-none link-hover card-link'>Shop on Amazon Business</Link>
                </div>
            </CardBody>
        </Card>
    </div>
    </>
  )
}

export default LoginPage