import React from "react";
import Hero1 from "./images/hero-product-1.jpg";
import Hero2 from "./images/hero-product-2.jpg";
import Hero3 from "./images/hero-product-3.jpg";
import Hero4 from "./images/hero-product-4.jpg";
import Hero5 from "./images/hero-product-5.jpg";

const Swiper = () => {
  return (
    <div>
      <div className="row">
        <ul>
          <li>
            <h2>Art Deco Home</h2>
            <p>Decoration</p>
            <img src={Hero1} alt="" width="250px" />
          </li>
          <li>
            <h2>Armless Chair</h2>
            <p>Decoration</p>
            <img src={Hero2} alt="" width="250px" />
          </li>
          <li>
            <h2>Vase Of Flowers</h2>
            <p>Decoration</p>
            <img src={Hero3} alt="" width="250px" />
          </li>
        </ul>
      </div>
      <div className="row2">
        <ul>
          <li>
            <h2>Wood Eggs</h2>
            <p>Decoration</p>
            <img src={Hero4} alt="" />
          </li>
          <li>
            <h2>Table Wood Pine</h2>
            <p>Furniture</p>
            <img src={Hero5} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Swiper;
