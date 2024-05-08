import React from 'react'
import { Form } from 'react-bootstrap'

const CheckBox = ({label,type,className}) => {
  return (
    <>
    <Form.Check
            type={type}
            label={label}
            className={className}
          />
    </>
  )
}

export default CheckBox