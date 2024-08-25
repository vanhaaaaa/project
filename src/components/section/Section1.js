import React from 'react'
import "./section.scss"
import { Col, Container, Row } from 'reactstrap'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SavingsIcon from '@mui/icons-material/Savings';
import ScrollAnimation from 'react-animate-on-scroll';
import { useTranslation } from 'react-i18next';
export default function Section1() {
  const { t } = useTranslation("translation");
  return (

    <>

      <div id='num'>

        <div className='bg-overlay'></div>
        <Container>
        <ScrollAnimation animateIn='fadeIn' 
          >
          <Row>

            <Col >  <span><LocalShippingIcon style={{ fontSize: 80 + 'px' }} /></span>
              <div>
                <h5>{t("Free Shipping")}</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, atque?</p>
              </div>
            </Col>
            <Col>
              <span><CardGiftcardIcon style={{ fontSize: 80 + 'px' }} /> </span>
              <div>
                <h5>{t("Special Gifts")}</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, atque?</p>
              </div>
            </Col>
            <Col> <span><SavingsIcon style={{ fontSize: 80 + 'px' }} /></span>
              <div>
                <h5>{t("Save When You Buy Here")}</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, atque?</p>
              </div>
            </Col>
          </Row>

          </ScrollAnimation>

        </Container>
      </div >

    </>

  )
}
