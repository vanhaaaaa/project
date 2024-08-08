import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import './contact.scss';
import logo from '../../assets/logo.png'
export default function Contact() {
  document.title = "AW Contact"
  return (
 <>
      <Header />

      <div id='contact'>
        <Container >


          <img src={logo} />

    <h4>hay gui phan hoi cua ban ve chung toi</h4>
          <Form>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">
                    Email
                  </Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="email"
                    type="email"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">
                    Tên của bạn
                  </Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="ten cua ban"
                    type="text"
                  />
                </FormGroup>
              </Col>

              <Col>
                <FormGroup>
                  <Label for="exampleCity">
                  noi dung
                  </Label>
                  <Input
                    id="exampleCity"
                    name="city"
                    type='textarea'
                  />
                </FormGroup>
              </Col>


            </Row>

            <Button>
          gui 
            </Button>
          </Form>



        </Container>
      </div>
      <Footer />
      </>
  )
}
