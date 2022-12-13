import React from "react";
import { Arrowup } from "../../Icons";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    // <footer>
    //   <section className="container">
    //     <div className="container-col">
    //       <h1>Our Newsletter</h1>
    //       <p>Subscribe to our newsletter and get discount 50% off</p>
    //     </div>
    //     <input type="text" placeholder="Your email address" />
    //   </section>
    //   <section className="details">
    //     <article>
    //           <h1>Bechart</h1>
    //           <p>Bechart, Nairobi, Kenya 2022</p>
    //           <p>+406-459-234</p>
    //     </article>
    //     <article>
    //       <ul>
    //         <li className="title">Help & Information</li>
    //         <li>Help & Contact Us</li>
    //         <li>Returns & Refunds </li>
    //         <li>Online Stores</li>
    //         <li>Terms & Conditions</li>
    //       </ul>
    //     </article>
    //     <article>
    //       <ul>
    //         <li className="title">About Us</li>
    //         <li>About Us</li>
    //         <li>What We Do</li>
    //         <li>FAQ Page</li>
    //         <li>Contact Us</li>
    //       </ul>
    //     </article>
    //     <article>
    //       <ul>
    //         <li>
    //           <input type="text" placeholder="Your email address" />
    //         </li>
    //         <li>Term & Condition</li>
    //         <li>Policy</li>
    //         <li>Map</li>
    //       </ul>
    //     </article>
    //   </section>
    //   <div className="paragraph"><p>&copy; 2022 All Rights Reserved by theChosenDevop</p>
    //   </div>
    //   <div className="arrow-up">
    //     <a href="#"><i class="fa fa-arrow-up" aria-hidden="true"></i></a>
    //   </div>
    // </footer>
    <footer>
    <div className="container">
      <h3>Our NewsLetter</h3>
      <article className="container-row">
        <p>Subscribe to our newsletter and get discount 50% off</p>
        <input type="text" placeholder="Input your mail address" />
      </article>
      <section>
      <article className="container-col">
        <h4>Bechart</h4>
        <p> Nairobi, Kenya 2022</p>
        <p>+406-459-234</p>
      </article>
      <article className="container-col">
        <h4>Help & Information</h4>
        <p>Help & Contact Us</p>
        <p>Returns & Refunds</p>
        <p>Online Stores</p>
        <p>Terms & Conditions</p>
      </article>
      <article className="container-col">
        <h4>About Us</h4>
        <p>About Us</p>
        <p>What We Do</p>
        <p>FAQ Page</p>
        <p>Contact Us</p>
      </article>
      <article  className="container-col">
        <input type="text" placeholder="Your email address" />
        <p>Term & Condition</p>
        <p>Policy</p>
        <p>Map</p>
      </article>
      </section>
    </div>
    <div className="copyright"><p>&copy; 2022 All Rights Reserved by theChosenDevop</p>
    </div>
     <div className="arrow-up">
       <a href="#"><i class="fa fa-arrow-up" aria-hidden="false"></i></a>
     </div>
    </footer>
  );
};

export default Newsletter;
