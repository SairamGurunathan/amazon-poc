import React from "react";
import { customerReview } from "../Constant/CustomerReview";
import { brand } from "../Constant/BrandList";
import CheckBox from "./CheckBox";
import { priceSortList } from "../Constant/PriceSortList";
import { Link } from "react-router-dom";
import InputBox from "./InputBox";
import ButtonTag from "./ButtonTag";
import { discountOffer } from "../Constant/DiscountOffer";
import { ageListSort } from "../Constant/AgeListSort";

const SideBarList = () => {
  return (
    <>
      <div className="">
        <div>
          <h6>Customer Reviews</h6>
          {customerReview?.map((rating, index) => (
            <div key={index}>
              <Link className="text-decoration-none text-dark">
                {rating.clear}
              </Link>
              {Object.keys(rating.star).map((key) => (
                <div key={key} className="d-flex flex-row align-items-center">
                  {rating.star[key].map((star, i) => (
                    <>
                      <Link key={i}>{star}</Link>
                    </>
                  ))}
                  <span className="fs-12"> & Up</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div>
          <h6>Brand</h6>
          {brand?.map((brand) => (
            <CheckBox label={brand} type={"checkbox"} />
          ))}
        </div>
        <div>
          <h6>Price</h6>
          {priceSortList?.map((price) => (
            <div className="d-flex flex-column">
              <Link className="text-decoration-none text-dark">
                {price?.clear}
              </Link>
              <Link className="text-decoration-none text-dark fw-bold">
                {price?.below}
              </Link>
              {price?.price?.map((pri) => (
                <Link className="text-decoration-none text-dark">{pri}</Link>
              ))}
            </div>
          ))}
          <div className="d-flex flex-row gap-2">
            <InputBox placeholder={"₹ Min"} />
            <InputBox placeholder={"₹ Max"} />
            <ButtonTag
              label={"Go"}
              variant={"outline-info"}
              className={"text-dark"}
            />
          </div>
        </div>
        <div>
          <h6>Discount</h6>
          {discountOffer?.map((off) => (
            <Link className="text-decoration-none text-dark d-flex flex-column">
              {off} Off or more
            </Link>
          ))}
        </div>
        <div>
          <h6>Age</h6>
          {
            ageListSort?.map((age)=>(
              <CheckBox label={age} type={CheckBox}/>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default SideBarList;
