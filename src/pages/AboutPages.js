import React from 'react';
import Info from '../AboutPage/Info';
import Hero  from '../components/Hero';
import aboutBcg from '../images/aboutBcg.jpeg'
function AboutPages() {
  return (
    <div>
     <Hero img={aboutBcg}/>
     <Info />
    </div>
  )
}

export default AboutPages
