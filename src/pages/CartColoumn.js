import React from 'react'

function CartColoumn() {
    return (
        <div className="container-fluid>
            text-center d-none d-lg-block my-5" >
            <div className="row">
            {/*single coloumn */}
            <div className="col-lg-2">
            <p classsName="text-uppercase">PRODUCTS</p>
            </div>
            
             {/* end of single coloumn */}
          
    
            {/*single coloumn */}
            <div className="col-lg-2">
            <p classsName="text-uppercase"> NAME OF PRODUCTS</p>
         </div>
            
             {/* end of single coloumn */}
       
            {/*single coloumn */}
            <div className="col-lg-2">
            <p classsName="text-uppercase">PRICE</p>
     
            </div>
             {/* end of single coloumn */}
            

            {/*single coloumn */}
            <div className="col-lg-2">
            <p classsName="text-uppercase">QUANTITY</p>
            </div>
            
             {/* end of single coloumn */}
          
           
          
            {/*single coloumn */}
            <div className="col-lg-2">
            <p classsName="text-uppercase">REMOVE</p>

            </div>
             {/* end of single coloumn */}
          
 
         
            {/*single coloumn */}
            <div className="col-lg-2">
            <p classsName="text-uppercase">TOTAL</p>
            </div>
            
             {/* end of single coloumn */}
          
        
          
            </div>
        </div>
    )
}

export default CartColoumn
