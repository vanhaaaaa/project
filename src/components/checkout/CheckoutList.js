import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row, Table } from 'reactstrap'
import './checkout.scss';
import { useNavigate } from 'react-router';
import emailjs from 'emailjs-com';
import {  clearCart } from '../../redux/cartSlice';
import axios from 'axios';
import FinalCheckout from './FinalCheckout';
import Swal from 'sweetalert2';
export default function CheckoutList() {
  const dispatch = useDispatch();
  const { cart, totalAmount, totalQuantity } = useSelector(state => state.cart)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone:'',
    address:''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const convertCartToHTML = (cart) => {
    return cart.map(item => `
      <tr>
                <td>${item.name}</td>
              <td>${item.quantity}</td>
              <td>${item.price}</td>
                <td>${item.totalPrice}</td>
              </tr>
    `).join('');
  };
  const handle_checkout = async (e) => {
    e.preventDefault();



  const newCart = {cart,gmail:formData.email,phone:formData.phone,name:formData.name,address:formData.address,id_order:formData.name + formData.phone}
    try {
      await axios.post('https://66b77d767f7b1c6d8f1c06dc.mockapi.io/cart', { newCart});
    
     
    } catch (error) {
    
   
    }
    const templateParams = {
      email:formData.email,
      name: formData.name,
      from_name: 'Aw shop',
      order_id: formData.name + formData.phone,
      totalQuantity: totalQuantity,
      totalAmount: totalAmount,
      phone:formData.phone,
      address:formData.address,
      cart:cart.map(item => 
       `
      <tr>
                <td>${item.name}</td>
              <td>${item.quantity}</td>
              <td>${item.price}</td>
                <td>${item.totalPrice}</td>
              </tr>`
    ).join('')
    };
    emailjs.send('service_18kjnin', 'template_4oyzg8j', templateParams, 'CLDXjq5yFH9XUUYGD')
    localStorage.setItem("orderDetail", JSON.stringify(newCart))
    dispatch(clearCart())
    Swal.fire({
      title: "đợi 1 chút nhé!",
      html: "đang xử lý",
      icon:"info",
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false,
  }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
      }
      Swal.fire({
        title: "thanks you!",
        text: "Đơn hàng đã đặt thành công",
        icon: "success"
      });
      navigate('/finalcheckout');
  });


  }
  return (
    <>
      <div id='checkout_list'>
        <Container>
          <Form onSubmit={handle_checkout}>
            <Row>

              {/* form ban trai */}


              <Col lg={6} className='form_left'>
                <h4>Thông Tin nhận hàng</h4>

                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleEmail">
                        Email
                      </Label>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="...@gmail.com"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}

                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="examplePassword">
                        Tên người nhận
                      </Label>
                      <Input
                        id="examplePassword"
                        name="name"
                        placeholder="ho va ten"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md={12}>
                    <FormGroup>
                      <Label for="exampleCity">
                        Số điện thoại
                      </Label>
                      <Input
                        id="exampleCity"
                        placeholder="(+84)"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                  </Col>


                </Row>

                <FormGroup>
                  <Label for="exampleAddress">
                    Địa chỉ nhận hàng
                  </Label>
                  <Input
                    id="exampleAddress"
                    name="address"
                    placeholder="số nhà, tên đường, thành phố"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleAddress2">
                    ghi chú
                  </Label>
                  <Input
                    type='textarea'
                  />
                </FormGroup>





              </Col>
              {/* form ban trai */}
              {/* form ben phai */}
              <Col lg={6} className='form_right'>

                <h4>hóa đơn chi tiết</h4>

                <Table
                  responsive>
                  <thead>
                    <tr>
                      <th>Tên sản phẩm</th>
                      <th>Số lượng</th>
                      <th>Giá tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cart?.map((item, index) => (
                        <tr key={index}>
                          <td><p>{item.name}</p></td>
                          <td className='text-center'>{item.quantity}</td>
                          <td>{new Intl.NumberFormat("en-US").format(item.price)} ₫</td>
                        </tr>
                      ))
                    }

                    <tr>
                      <th scope="row">Tổng cộng </th>
                      <th scope="row" className='text-center'>{totalQuantity}</th>
                      <th scope="row">{new Intl.NumberFormat("en-US").format(totalAmount)} ₫</th>
                    </tr>
                  </tbody>
                </Table>
                <Col lg={6}>
                  <FormGroup>
                    <Label for="exampleSelect">
                      Phương thức thanh toán
                    </Label>
                    <Input
                      id="exampleSelect"
                      name="select"
                      type="select">
                      <option>
                        Thanh toán khi nhận hàng
                      </option>
                      <option>
                        vnpay
                      </option>
                    </Input>
                  </FormGroup>
                </Col>
                <div className='text-center'>
                  <Button type='submit'>đặt hàng</Button>
                </div>
              </Col>
              {/* form ben phai */}
            </Row>

          </Form>
        </Container>
      </div>




    </>
  )
}
