import React, { Component } from 'react'
import {  ProductConsumer } from '..//context/context'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
        {value => {
          console.log(value);
          return <h1>Hello from HomePage</h1>;
        }}
      </ProductConsumer>
      </div>
    )
  }
}
