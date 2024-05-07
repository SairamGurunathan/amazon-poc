import React from "react";

const OfferPrice = ({offer,price}) => {
  return (
    <>
      <div className="d-flex flex-row align-items-center gap-2">
        <span className="badge badge-off border-0 rounded-1 p-2">
          {offer}
        </span>
        <small className=" fs-12 fw-bold lh-sm text-wrap">{price}</small>
      </div>
    </>
  );
};

export default OfferPrice;
