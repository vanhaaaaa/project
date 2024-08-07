import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CartList from '../../components/cart/CartList'

export default function Cart() {
     document.title = "AW shoppingcart"
  return (
    <div>
      <Header/>
    <CartList/>

      <Footer/>
    </div>
  )
}
