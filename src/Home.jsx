import React from 'react'
import Homepage from "./Pages/HomePage";
import Aboutpage from "./Pages/AboutPage";
import Projectpage from "./Pages/Projects";
// import Integration from "./Pages/Integration";
import Contactpage from "./Pages/ContactPage";
import Navbar from './Component/Navbar';

const Home = () => {
  return (
    <div className=''>
      <Navbar />,   
    <Homepage />,
    <Aboutpage />,
    <Projectpage />,
    {/* <Integration />, */}
    <Contactpage />
    </div>
  )
}

export default Home