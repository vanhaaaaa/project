import React from 'react'
import './main.scss'
import logo_sitizen from "../../assets/logo_citizen.png"
import logo_olym from "../../assets/logo_olym.png"
import logo_gshock from "../../assets/logo_gshock.png"
import logo_orient from "../../assets/logo_orient.png"
import logo_tissot from "../../assets/logo_tissot.png"
import { Col, Container, Row } from 'reactstrap'
export default function Main() {
  return (
    <>
      <div id='main'>
<Container>
        <h1>Thương hiệu hợp tác</h1>



        <Row>
          <Col lg={2} md={3} xs={6}><img src={logo_gshock} /></Col>
          <Col lg={2} md={3} xs={6}><img src={logo_olym} /></Col>
          <Col lg={2} md={3} xs={6}><img src={logo_orient} /></Col>
          <Col lg={2} md={3} xs={6}><img src={logo_sitizen} /></Col>
          <Col lg={2} md={3} xs={6}><img src={logo_tissot} /></Col>
        </Row>



        </Container>
      </div>

    </>
  )
}
