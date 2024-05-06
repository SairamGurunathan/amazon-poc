import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CustomCarousel = ({ imageList, slide, style, coverImage }) => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 8 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <div style={{ position: 'relative' }}>
      <Carousel
        responsive={responsive}
        containerClass="carousel-container"
        shouldResetAutoplay
        arrows
        keyBoardControl
        swipeable
        draggable
        slidesToSlide={slide}
      >
        {imageList?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={coverImage ? {
              display: 'block',
              height: '100%',
              margin: 'auto',
              width: '100%'
            } : style}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
