import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ProdMale from '../../components/prodMale/ProdMale'
import ProdFemale from '../../components/prodMale/ProdFemale'
import Section1 from '../../components/section/Section1'

export default function Home() {
   document.title = "AW Home"
  return (
 <>
     
        <Header/>
      <ProdMale/>
      <Section1/>
      <ProdFemale/>
        <Footer/>
        </>
  )
}
