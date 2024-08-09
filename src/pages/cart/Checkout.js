import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

import CheckoutList from '../../components/checkout/CheckoutList'
export default function Checkout() {
  return (
    <div>
      <Header/>
    <CheckoutList/>
      <Footer/>
    </div>
  )
}
