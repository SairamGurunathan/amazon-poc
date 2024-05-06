import React from 'react'

const NavMenus = ({icon,line1,line2,onClick}) => {
  return (
    <>
    <div className='d-flex align-items-center text-white menu' onClick={onClick}>
    <div className='fs-4'>
        {icon}
    </div>
    <div className='d-flex flex-column'>
        <small className='fs-12 text-nowrap'>{line1}</small>
        <small className='fw-bold fs-12 text-nowrap'>{line2}</small>
    </div>
    </div>
    </>
  )
}

export default NavMenus