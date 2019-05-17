import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Hero from '../components/Hero'
import Service from '../homepage/Service'
import Feature from '../homepage/Feature'
export default function HomePage() {
  return (
    <>
      <Hero title="awesome gadgets" max="true">
        <Link style={{margin:'2rem'}}className ="main-link" to="/product">our products</Link>
      </Hero>
      <Service></Service>
      <Feature></Feature>
    </>
  );
}
