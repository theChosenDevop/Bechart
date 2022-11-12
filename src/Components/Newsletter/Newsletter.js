import React from "react";
import {Arrowup} from '../../Icons'
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <footer>
      <section className="container">
        <div className="container-col">
          <h1>Our Newsletter</h1>
          <p>Subscribe to our newsletter and get discount 50% off</p>
        </div>
        <input type="text" placeholder="Your email address" />
      </section>
      <section className="details">
        <article>
              <h1>Bechart</h1>
              <p>Bechart, Nairobi, Kenya 2022</p>
              <p>+406-459-234</p>
        </article>
        <article>
          <ul>
            <li className="title">Help & Information</li>
            <li>Help & Contact Us</li>
            <li>Returns & Refunds </li>
            <li>Online Stores</li>
            <li>Terms & Conditions</li>
          </ul>
        </article>
        <article>
          <ul>
            <li className="title">About Us</li>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ Page</li>
            <li>Contact Us</li>
          </ul>
        </article>
        <article>
          <ul>
            <li>
              <input type="text" placeholder="Your email address" />
            </li>
            <li>Term & Condition</li>
            <li>Policy</li>
            <li>Map</li>
          </ul>
        </article>
      </section>
      <div className="paragraph"><p>&copy; 2022 All Rights Reserved by theChosenDevop</p>
      </div>
      <div className="arrow-up">
        <a href="#"><i class="fa fa-arrow-up" aria-hidden="true"></i></a>
      </div>
    </footer>
  );
};

export default Newsletter;
