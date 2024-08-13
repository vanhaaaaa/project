import React from 'react'
import "./section.scss"
import { Col, Container, Row } from 'reactstrap'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SavingsIcon from '@mui/icons-material/Savings';
import ScrollAnimation from 'react-animate-on-scroll';
export default function Section1() {
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
                <h5>Miễn Phí Giao Hàng</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, atque?</p>
              </div>
            </Col>
            <Col>
              <span><CardGiftcardIcon style={{ fontSize: 80 + 'px' }} /> </span>
              <div>
                <h5>Quà Tặng Đặc Biệt</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, atque?</p>
              </div>
            </Col>
            <Col> <span><SavingsIcon style={{ fontSize: 80 + 'px' }} /></span>
              <div>
                <h5>Tiết Kiệm Khi Mua Ở Đây</h5>
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
