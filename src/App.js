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
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Sidecar from './components/Sidecar';
import Detail from './pages/Detail'
import ProductPage from './pages/ProductPage'
export default function App() {
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
<Route path="/products" exact component = { ProductPage}/>
<Route path="/cart" component = { CartPages }/>
<Route path="/detail" component = { Detail }/>
<Route path="/products/:id" exact component = { SingleProductPage }/>


<Route component = { Default } />
       </Switch>

       <Footer />
   
    </>;
  
}


