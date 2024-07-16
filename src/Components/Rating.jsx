import React from "react";
import { AiFillInstagram, AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, setrating }) => {
  function handleStarClick(i) {
    setrating(i + 1);
  }
  return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span className="text-xl" key={i} onClick={() => handleStarClick(i)}>
            {" "}
            {rating > i ? <AiFillStar /> : <AiOutlineStar />}
          </span>
        ))}
      </div>
   
  );
};

export default Rating;
