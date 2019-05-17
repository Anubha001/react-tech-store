import React from 'react'
import Title from '../components/Title'

function contact() {
  return (
   <section className="py-5">
   <div className="row">
   <div className="col-10 mx-auto col-md-6 my-3">

   <Title title ="contact us" />
   
   <form className="mt-5" form action="https://formspree.io/email@domain.tld" method="POST">
   <div className="form-group">
   <input type ="text"
    name="firstname" 
   placeholder="Anubha " 
   className="form-control "/>
   </div>

   <div className="form-group">
   <input type ="email"
    name="email" 
   placeholder="anubha@xyz.com " 
   className="form-control "/>
   </div>

   <div className="form">
   <input type ="text"
    name="subject" 
   placeholder="Important!!! " 
   className="form-control "/>
   </div>


   <div className="form">
   <textarea type ="text"
    name="message" 
   placeholder="Hello buddy " 
   className="form-control "/>
   </div>

<div className="form-group mt-3">

<input type="submit"
value="send" 
classname="form-control bg-primary text-white"/>
</div>
   </form>
    </div>
</div>
 </section>
  )
}

export default contact
