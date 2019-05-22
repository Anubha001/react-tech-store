import React, { Component } from 'react'
import Product from '../pages/Detail'
import Title from '../components/Title'
import { ProductConsumer } from '../context/context'
import  { Link } from 'react-router-dom'

export default class Feature extends Component {
  render() {
    return (
      <section className="py-5">
       <div className="container">
       <Title title="featured products"center='true' ></Title>
       <div className="row">
       
<ProductConsumer>


  {value => {

const {featuredProducts} = value;
return featuredProducts.map(product =>(<Product key={product.id} product={product}></Product>))
  }}
</ProductConsumer>


       
       </div>
       </div>

      </section>
    )
  }
}
