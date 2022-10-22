import React from 'react'
import AboutImg from '../../images/about-banner.jpg'
import './About.css'

const About = () => {

  return (
    <div className='about'>
        <h1>Woodex Store</h1>
        <p>When you start with a portrait and search for a pureform, a clear volume, through successive eliminations, you arrive inevitably at egg. Likwise, starting with the egg and the same process in reverse, one finishes with the portrait.</p>
        <img src={AboutImg} alt="" />
    </div>
  )
}

export default About