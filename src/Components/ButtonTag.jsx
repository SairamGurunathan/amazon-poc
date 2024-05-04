import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonTag = ({label,type,className,variant,icon}) => {
  return (
    <>
    <Button type={type} variant={variant} className={className}>{icon}{label}</Button>
    </>
  )
}

export default ButtonTag