import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <footer>
        <section className='newsletter'>
        <div>
            <h1>Our Newsletter</h1>
            <p>Subscribe our newsletter and get discount 50% off</p>
        </div>
        <input type="text" placeholder='Your email address' />
        </section>
        <section className='details'>
            <article>
            <h1>Bechart</h1>
            <p>Woodex, Nairobi, Kenya 2022</p>
            <p>+406-459-234</p>
            </article>
            <article>
                <ul>
                    <li>Help & Information</li>
                    <li>Help & Contact Us</li>
                    <li>Returns & Refunds </li>
                    <li>Online Stores</li>
                    <li>Terms & Conditions</li>
                </ul>
            </article>
            <article>
                <ul>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>What We Do</li>
                    <li>FAQ Page</li>
                    <li>Contact Us</li>
                </ul>
            </article>
            <article>
                <ul>
                    <li><input type="text" placeholder='Your email address' /></li>
                    <li>Term & Condition</li>
                    <li>Policy</li>
                    <li>Map</li>
                </ul>
            </article>
        </section>
        <p>&copyright 2022 All Rights Reserved by ChosenDevop</p>
        <div className='arrow-up'><a href="#"></a></div>
    </footer>
  )
}

export default Newsletter