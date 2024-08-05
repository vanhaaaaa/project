import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Products from '../../components/products/Products'

export default function Product() {
   document.title = "AW Product"
  return (
    <div>
      <Header/>

    <Products/>

      <Footer/>
    </div>
  )
}
