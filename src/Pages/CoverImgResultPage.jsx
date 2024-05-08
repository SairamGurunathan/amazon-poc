import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { toysMenuList } from '../Constant/ToysMenuList'
import { Link } from 'react-router-dom'
import SelectTag from '../Components/SelectTag'
import SideBarList from '../Components/SideBarList'
import { toysResult } from '../Constant/ToysResults'
import StarRating from '../Components/StarRating'
import OfferPrice from '../Components/OfferPrice'

const CoverImgResultPage = () => {
  return (
    <>
    <div className='bg-white'>
        <div className='d-flex flex-row text-nowrap px-3 py-1' style={{backgroundColor:'#fafafa'}}>
            <Row>
                {toysMenuList?.map((menu,i)=>(
                        <Col>
                   <Link
            key={i}
            to={`/${menu}`}
            className="text-decoration-none text-dark fs-12 result-menu"
          >
            {menu}
          </Link>
                </Col>
                ))}
            </Row>
        </div>
        <div>
            <Row>
                <Col>
                <div className='d-flex flex-row align-items-center px-3 bg-white'>
                    <span>1-24 of 616 results</span>
                    <SelectTag className={'w-25 ms-auto'} title={'Bestselling'} option={['Bestselling','Price: Low to High','Price: High to Low','Avg. Customer Review','Newest Arrivals']}/>
                </div>
                </Col>
            </Row>
        </div>
        <Row>
          <Col lg={2}>
            <SideBarList/>
          </Col>
          <Col lg={10}>
            <Row>
              {toysResult?.map((toy,index)=>(
                <Col lg={3}>
                <div className="card p-2 my-3">
                <img
                  src={toy?.image}
                  alt={`Slide ${index + 1}`}
                  style={{width:'220px',height:'250px'}}
                />
                <div>
                  <Link className="text-decoration-none card-link link-truncate">
                    {toy.heading}
                  </Link>
                </div>
                <div>
                  <StarRating
                    star={toy.rating.star}
                    review={toy?.rating?.view}
                  />
                </div>
                <p className='text-muted m-0'>{toy?.buy}</p>
                <div>
                  <OfferPrice
                    offer={toy?.badge}
                  />
                </div>
                <div className='d-flex flex-row gap-2 '>
                <span>₹{toy?.rate}</span>
                <small className="fs-12">
                  M.R.P:{" "}
                  <span className="text-decoration-line-through">
                    ₹{toy?.mrp}
                  </span>
                </small>
                <span>{( toy?.offer)}</span>
                </div>
                <small className="fs-12">
                  Get it by <span className="fw-bold">{toy?.date}</span>
                </small>
                <small className="fs-12">{toy?.delivery}</small>
                <small>{toy?.age}</small>
              </div>
              </Col>
              ))}
              </Row>
          </Col>
        </Row>
        </div>
    </>
  )
}

export default CoverImgResultPage