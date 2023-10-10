import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { BiSolidQuoteRight } from "react-icons/bi";

import reviews from "./Data";
const Main = () => {
  const [number, setNumber] = useState(0);
  const { name, job, image, text } = reviews[number];

  const numbReset = (numb) => {
    if (number < 0) {
      return reviews.length - 1;
    }
    if (numb > reviews.length - 1) {
      return 0;
    }

    return numb;
  };
  const nextFun = () => {
    setNumber((index) => {
      const newNumb = index + 1;
      return numbReset(newNumb);
    });
  };
  const prevFun = () => {
    setNumber((index) => {
      let newNumb = index - 1;
      if (newNumb < 0) {
        return reviews.length - 1;
      }
      return newNumb;
    });
  };

  const randomFun = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === number) {
      randomNumber = number + 1;
    }
    setNumber(numbReset(randomNumber));
  };

  return (
    <div className="review">
      <div className="image_con">
        <img src={image} alt="" />
        <span className="qoute">
          <BiSolidQuoteRight />
        </span>
      </div>
      <div className="person_details">
        <h2 className="person_name">{name}</h2>
        <p className="role">{job}</p>
        <p className="desc">{text}</p>
      </div>
      <div className="button_com">
        <span className="prev_btn" onClick={prevFun}>
          <FaChevronLeft />
        </span>
        <span className="next_btn" onClick={nextFun}>
          <FaChevronRight />
        </span>
        <button className="random_btn" onClick={randomFun}>
          suprise me
        </button>
      </div>
    </div>
  );
};

export default Main;
