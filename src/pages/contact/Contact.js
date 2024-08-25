import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import './contact.scss';
import logo from '../../assets/logo.png'
import { TextField } from '@mui/material';
export default function Contact() {
  document.title = "AW Contact"
  return (
 <>
      <Header />

      <div id='contact'>
        <Container >


          <img src={logo}  />

    <h4>hãy gửi phản hồi của bạn về chúng tôi</h4>
          <Form>
            <Row>
              <Col md={6} className='p-5'>
              
      
                  <TextField id="standard-basic" className='w-100'  color="warning" label="email" variant="standard" />
              </Col >
              <Col md={6} className='p-5'>
              <TextField id="standard-basic" className='w-100'  color="warning" label="phone"  variant="standard" />
              </Col>

              <Col md={12}>
              <TextField
              className='w-100 mt-4'   color="warning"
          id="outlined-multiline-static"
          label="nôị dung"
          multiline
          rows={4}
    
        />
              </Col>


            </Row>

            <Button>
       gửi 
            </Button>
          </Form>



        </Container>
      </div>
      <Footer />
      </>
  )
}
