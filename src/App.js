import React from 'react';
import HomePage from './pages/HomePage'
import  AboutPages from "./pages/AboutPages"
import CartPages from './pages/CartPage'
import ContactPage from './pages/ContactPage'
import Default from './pages/Default'
import Product from './pages/Product'
import SingleProductPage from './pages/SingleProductPage'
import { Route, Link, Switch ,BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './home'
import { FaBeer } from 'react-icons/fa';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Sidecar from './components/Sidecar'




function App() {
  return  < >
   { /*navbar, sidebar,cart,footer */}
<Navbar />
<Sidebar />
<Sidecar />

     <Switch>

<Route path="/" exact component = { HomePage }/>

<Route path="/about" component = { AboutPages }/>

<Route path="/contact" component = { ContactPage }/>

<Route path="/product" component = { Product}/>

<Route path="/cart" component = { CartPages }/>

<Route path="/product/:id" component = { SingleProductPage }/>

<Route component = { Default }/>
       </Switch>

       <Footer />
    </>;
  
}

export default App;
