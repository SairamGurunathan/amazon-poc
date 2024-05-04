import React from 'react'
import NavIcons from './NavIcons'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const MenuList = () => {
    const list = ['Fresh','Amazon miniTV','Sell','Best Sellers','Mobiles',"Today's Deal",'Prime','Customer Service','Electronics']
  return (
    <>
    <div className='d-flex flex-row text-white gap-3 ps-3 py-2 fs-6' style={{backgroundColor:'#232f3e'}}>
        <NavIcons icon={<Icon icon="icon-park-outline:hamburger-button"  style={{color: 'white'}} />} title={'All'}/>
    {
        list?.map((menu,index)=>(
            <Link key={index} to={`/${menu}`} className='text-decoration-none text-white'>{menu}</Link>
        ))
    }
    </div>
    </>
  )
}

export default MenuList