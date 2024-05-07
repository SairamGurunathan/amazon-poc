import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonTag = ({label,type,className,variant,icon,onClick}) => {
  return (
    <>
    <Button type={type} variant={variant} className={className} onClick={onClick}>{icon}{label}</Button>
    </>
  )
}

export default ButtonTag