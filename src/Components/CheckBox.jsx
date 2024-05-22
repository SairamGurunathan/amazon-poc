import React from 'react'
import { Form } from 'react-bootstrap'

const CheckBox = ({label,type,className,key,onChange}) => {
  return (
    <>
    <Form.Check
            type={type}
            label={label}
            className={className}
            key={key}
            onChange={onChange}
          />
    </>
  )
}

export default CheckBox