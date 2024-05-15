import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
function Review_stars({ no_of_stars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(id) {
    setRating(id);
  }

  function handleHover(id) {
    setHover(id);
  }

  function handleLeave() {
    setHover(rating);
  }

  return (
    <div className="flex gap-3 m-3 ">
      {[...Array(no_of_stars)].map(
        (_, index) => (
          (index += 1),
          (
            <FaStar
              className={
                index <= (hover || rating)
                  ? "text-yellow-500 "
                  : "text-black-300"
              }
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleLeave()}
              size={40}
              key={index}
            />
          )
        )
      )}
      <p className="text-4xl">
        {rating}
        <span className="text-xl">/5</span>
      </p>
    </div>
  );
}

export default Review_stars;
