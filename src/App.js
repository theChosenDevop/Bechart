import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Introduction/Intro'
import About from './Components/About/About'
import Products from './Components/Products/Products'
import Explore from './Components/Explore/Explore'
import Newsletter from './Components/Newsletter/Newsletter'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Intro />
      <About/>
      <Products />
      <Explore />
      <Newsletter />
    </div>
  )
}

export default App