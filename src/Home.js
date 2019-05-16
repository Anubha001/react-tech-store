import React from "react";
import { ProductConsumer } from "./context/context";
export default function Home() {
  return (
    <>
      <ProductConsumer>
      {value =>{
        console.log(value) ;
        return <h1>hello from homepage</h1>;
      }}
        </ProductConsumer>
    </>
  );
}
