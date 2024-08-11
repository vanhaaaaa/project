import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Container } from 'reactstrap'
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


export default function FinalCheckout() {
const [data,setData]=useState({
  address: '',
  cart: [],
  gmail: '',
  id_order: '',
  name: '',
  phone: ''
});

  useEffect(() => {
    if (localStorage.getItem("orderDetail")) {
        setData(JSON.parse(localStorage.getItem("orderDetail")))
    }
}, [])
  
  return (
   <>
    
    <Header/>       

    <div id='final_checkout'>

<Container>
<h5>Chi tiết đơn hàng</h5>

    <h6>gmail:{data.gmail}</h6>
    <h6>name:{data.name}</h6>
    <h6>phone:{data.phone}</h6>


{data.cart.map((item, index) => (
          <li key={index}>
            <p><strong>Tên sản phẩm:</strong> {item.name}</p>
            <p><strong>Giá:</strong> {item.price}</p>
          </li>
        ))}



</Container>



    </div>



    <Footer/>

   
   </>
  )
}
