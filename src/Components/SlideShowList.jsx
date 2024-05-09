import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { recommented } from "../Constant/RecommentedList";
import { Link } from "react-router-dom";
import OfferPrice from "./OfferPrice";
import StarRating from "./StarRating";

const SlideSHowList = ({ imageList, slide, style }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const isMultiProduct = imageList !== recommented;

  return (
    <div style={{ position: "relative" }}>
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
        {imageList?.map((item, index) => (
          <div key={index}>
            {isMultiProduct ? (
              <>
              <img src={item || item?.image} alt={`Slide ${index + 1}`} style={style} />
              <h5>{item?.name}</h5>
              </>
            ) : (
              <div className="card p-2 my-3">
                <img
                  src={item?.image}
                  alt={`Slide ${index + 1}`}
                  style={style}
                />
                <div>
                  <Link className="text-decoration-none card-link link-truncate">
                    {item.heading}
                  </Link>
                </div>
                <div>
                  <StarRating
                    star={item.rating.star}
                    review={item?.rating?.view}
                  />
                </div>
                <div>
                  <OfferPrice
                    offer={item?.offer.offer}
                    price={item?.offer?.price}
                  />
                </div>
                <span>₹{item?.rate}</span>
                <small className="fs-12">
                  M.R.P:{" "}
                  <span className="text-decoration-line-through">
                    ₹{item?.mrp}
                  </span>
                </small>
                <small className="fs-12">
                  Get it by <span className="fw-bold">{item?.date}</span>
                </small>
                <small className="fs-12">{item?.delivery}</small>
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SlideSHowList;
