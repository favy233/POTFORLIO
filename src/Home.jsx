import React from 'react'
import Homepage from "./Pages/HomePage";
import Aboutpage from "./Pages/AboutPage";
import Projectpage from "./Pages/Projects";
import Hobbies from "./Pages/Hobbies";
import Footer from './Component/Footer';
import ExperienceEducation from './Pages/ExperienceEducation';
import Contactpage from "./Pages/ContactPage";
import Navbar from './Component/Navbar';

const Home = () => {
  return (
    <div className=''>
      <Navbar />   
      <Homepage />
      <Aboutpage />
      <Projectpage />
      <Hobbies />
      <ExperienceEducation />
      <Contactpage />
      <Footer />
    </div>
  )
}

export default Home
