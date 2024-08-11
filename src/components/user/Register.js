
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import './style.scss';
export default function Register() {
    const dispatch = useDispatch();

    useEffect(() => {

    }, []);
  return (
    <>
    <div className='form_login'>
<Container>


    <Form>
    <h4>Register</h4>
<Row>
<Col md={12}>
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
<Col md={12}>
<FormGroup>
<Label for="examplePassword">
  Password
</Label>
<Input
  id="examplePassword"
  name="password"
  placeholder="password placeholder"
  type="password"
/>
</FormGroup>
</Col>
</Row>




<Button>
dang ky
</Button>
</Form>




</Container>

    </div>


</>
  )
}
