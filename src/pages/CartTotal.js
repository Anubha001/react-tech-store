import React from 'react'
import  { ProductConsumer } from '../context/context'
import Paypal from '../Paypal'

function CartTotal(history) {
    return (
        <div className="container"> 
        <div className="row">
        <ProductConsumer>
{value =>
{
    const{cartTotal,clearCart,cartSubTotal,cartTax}
    =value;
    return<div className="col text-center my-4">
    <buttton className="btn btn-outline-danger text-capitalize mb-4" onClick={clearCart}> clearCart
    </buttton>
    <h3> cartsubTotal:${cartSubTotal}</h3>
    <h3> Tax:${cartTax}</h3>
    <h3> Total:${cartTotal}</h3>
    <br></br>
<Paypal history={history} cartTotal={cartTotal} clearCart={clearCart}></Paypal>
    </div>
    }}
          
            </ProductConsumer>
        
        </div>
           
        </div>
    )
}

export default CartTotal
