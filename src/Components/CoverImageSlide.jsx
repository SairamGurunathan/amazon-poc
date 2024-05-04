import React from 'react'
import Carousel from 'react-multi-carousel'

const CoverImageSlide = ({imageList}) => {
  return (
    <>
        <div
  style={{
    paddingBottom: '30px',
    position: 'relative'
  }}
>
  <Carousel
    additionalTransfrom={0}
    arrows
    autoPlay
    autoPlaySpeed={3000}
    centerMode={false}
    className="p-0"
    containerClass="container-fluid"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    pauseOnHover
    renderArrowsWhenDisabled={false}
    renderButtonGroupOutside={false}
    renderDotsOutside
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 1
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 1
      }
    }}
    rewind={false}
    rewindWithAnimation={false}
    rtl={false}
    shouldResetAutoplay
    sliderClass=""
    slidesToSlide={1}
    swipeable
  >
      {imageList?.map((image, index) => (
        <img key={index} src={image} alt={`Slide ${index + 1}`} style={{
          display: 'block',
          height: '100%',
          margin: 'auto',
          width: '100%'
        }}/>
      ))}    
  </Carousel>
</div>
    </>
  )
}

export default CoverImageSlide