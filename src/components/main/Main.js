import React from 'react'
import './main.scss'
import logo_sitizen from "../../assets/logo_citizen.png"
import logo_olym from "../../assets/logo_olym.png"
import logo_gshock from "../../assets/logo_gshock.png"
import logo_orient from "../../assets/logo_orient.png"
import logo_tissot from "../../assets/logo_tissot.png"
import { Col, Container, Row } from 'reactstrap'
import ScrollAnimation from 'react-animate-on-scroll'
import { useTranslation } from 'react-i18next';
export default function Main() {
  const { t } = useTranslation("translation");
  return (
    <>
      <div id='main'>
<Container>
        <h1>{t('Collaborative brand')}</h1>

        <ScrollAnimation animateIn='fadeIn'   animateOut='fadeOut' delay={100} >

        <Row>
          <Col  lg={2} md={3} xs={6}><img src={logo_gshock} /></Col>
          <Col  lg={2} md={3} xs={6}><img src={logo_olym} /></Col>
          <Col   lg={2} md={3} xs={6}><img src={logo_orient} /></Col>
          <Col  lg={2} md={3} xs={6}><img src={logo_sitizen} /></Col>
          <Col  lg={2} md={3} xs={6}><img src={logo_tissot} /></Col>
          
        </Row>

        </ScrollAnimation>

        </Container>
      </div>

    </>
  )
}
