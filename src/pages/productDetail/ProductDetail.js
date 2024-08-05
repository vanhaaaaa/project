import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'

import axios from 'axios'
import { useParams } from 'react-router'
import Footer from '../../components/footer/Footer'

export default function ProductDetail() {
    const {id}=useParams()
    const [data,setData]=useState({})
    useEffect(()=>{
      fetchData();
    },[])
    const url="https://66a0a2837053166bcabc1470.mockapi.io/product"
    const fetchData =()=>{
      axios.get(url+"/"+id)
      .then(function(res){
          setData(res.data)
      })
      .catch(function(error){
        console.log(error)
      })
    }
  return (
   <>
        <Header/>


        <div>
      <h1>Product detail: {id}</h1>
      <img src={data.img}  />
      <img src={data.img1}  />
      <img src={data.img2}  />

      <p>name: {data.name}</p>
      <p>name: {data.img1}</p>
      <p>name: {data.img2}</p>
    </div>


        <Footer/>
        </>
  )
}
