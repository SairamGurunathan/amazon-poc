import React from 'react';
import ProductCard from '../Components/ProductCard';
import { productList } from '../Constant/SingleProduct';
import { Col, Row } from 'react-bootstrap';
import { productImgList } from '../Constant/ProductCarousel';
import { Link } from 'react-router-dom';
import SlideSHowList from '../Components/SlideShowList';
import { coverImage } from '../Constant/CoverImage';
import CoverImageSlide from '../Components/CoverImageSlide';
import { toysImage } from '../Constant/ToysImage';
import { recommented } from '../Constant/RecommentedList';

const HomePage = () => {
  return (
    <>
    <div className='under'>
      <CoverImageSlide imageList={coverImage}/>
    </div>
    <div className='over'>
      <Row className='mx-3 g-3'>
        {productList?.map((pro, index) => (
          <Col lg={3} key={index}>
            <ProductCard heading={pro?.heading} img={pro?.img} link={pro?.link} />
          </Col>
        ))}
      </Row>
      <Row className='mx-2 px-3'>
        <div className="card my-4 overflow-auto slide-card">
          <Col lg={12} className='p-3'>
            <div className='d-flex flex-row align-items-center'>
              <h3>Up to 80% off | Deals on mobile accessories</h3>
              <Link className='text-decoration-none ps-3'><small className='fs-14 card-link link-hover'>Explore more</small></Link>
            </div>
            <SlideSHowList imageList={productImgList} slide={6} item={6}/>
          </Col>
        </div>
      </Row>
      <Row className='mx-2 px-3'>
        <div className="card my-4 overflow-auto slide-card">
          <Col lg={12} className='p-2'>
            <div className='d-flex flex-row align-items-center'>
              <h3>Up to 50% off | Deals on Toys</h3>
              <Link className='text-decoration-none ps-3'><small className='fs-14'>Explore more</small></Link>
            </div>
            <SlideSHowList imageList={toysImage} slide={6} item={6} style={{width:'150px', height:'150px'}}/>
          </Col>
        </div>
      </Row>
      <Row className='mx-2 px-3'>
        <div className="card my-4 overflow-auto slide-card">
          <Col lg={12} className='p-3'>
            <div className='d-flex flex-row align-items-center'>
              <h3>Inspired by your browsing history</h3>
              <Link className='text-decoration-none ps-3'><small className='fs-14'>Explore more</small></Link>
            </div>
            <SlideSHowList imageList={recommented} slide={6} item={6} style={{width:'180px', height:'180px'}}/>
          </Col>
        </div>
      </Row>
      </div>
    </>
  )
}

export default HomePage;
