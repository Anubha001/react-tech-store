import React from 'react'
import Hero from '../components/Hero'
import contactImg from "../images/contactBcg.jpeg"
import Contact from '../pages/Contact'

function ContactPage() {
  return (
    <div>
     <Hero img={contactImg}> </Hero>
   <Contact></Contact>
    </div>
  )
}

export default ContactPage
