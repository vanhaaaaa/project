import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Container, Table } from 'reactstrap'
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


export default function FinalCheckout() {
  const [data, setData] = useState({
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

      <Header />

      <div id='final_checkout'>
      {
        data.cart!=""  ? 
        <Container>


      <h5 className='text-center'>Chi tiết đơn hàng</h5>

        <h6>email:<strong> {data.gmail}</strong></h6>
        <h6>Tên người nhận hàng:<strong> {data.name}</strong></h6>
        <h6>Số điện thoại :<strong> {data.phone} </strong></h6>

        <Table
        bordered
        borderless
        dark
        responsive
        striped
>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
       Tên sản phẩm
      </th>
      <th>
     số lượng
      </th>
      <th>
     giá
      </th>
      <th>
  tổng cộng
      </th>
    </tr>
  </thead>
  <tbody>
  {data.cart.map((item, index) => (

<tr key={index}>
<td>    {index+1}</td> 
<td>    {item.name}</td> 
<td>    {item.quantity}</td> 
<td>         {new Intl.NumberFormat("en-US").format(item.price)}</td> 
<td>         {new Intl.NumberFormat("en-US").format(item.totalPrice)}</td> 
  </tr>
))}
   
    
  </tbody>
</Table>
       
      


        

      

        </Container>
  :
  <Container style={{padding:100+'px'}}>

    <h5 className='text-center'>bạn chưa có đơn hàng nào !!!</h5>
  </Container>
      }

      </div>



      <Footer />


    </>
  )
}
