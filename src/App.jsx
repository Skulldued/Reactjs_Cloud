import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from "./component/About"
import Support from './component/Support'
import All from './component/All'
import Pricing from './component/Pricing'
import Footer from "./component/Footer"
const App = () => {
  return (
    <div className='w-full '>
      <Navbar/>
      <Hero/>
      <About/>
       <Support/>
       <All/>
       <Pricing/>
       <Footer/>
    </div>
  )
}

export default App
