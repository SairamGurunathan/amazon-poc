import React from 'react'
import { Form } from 'react-bootstrap'

const SelectTag = ({title,option,className}) => {
  return (
    <Form.Select aria-label="Default select example" className={className}>
      <option>Sort by: {title}</option>
      {option?.map((opt,index)=>(
          <option value={index}>{opt}</option>
      ))
      }
    </Form.Select>
  )
}

export default SelectTag