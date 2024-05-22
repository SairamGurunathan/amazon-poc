import React from "react";

const StarRating = ({ star, review, i }) => {
  return (
    <div key={i}>
      <span className="fs-4">{star}</span>{" "}
      <span className="fs-12">{review}</span>
    </div>
  );
};

export default StarRating;
