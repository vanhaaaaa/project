import React from 'react'
import { useSelector } from 'react-redux'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row, Table } from 'reactstrap'
import './checkout.scss';
import { useNavigate } from 'react-router';
export default function CheckoutList() {
  const { cart, totalAmount, totalQuantity } = useSelector(state => state.cart)
  const navigate = useNavigate();


  const handle_checkout=()=>{
    navigate('/finalcheckout');
  } 
  return (
    <>
      <div id='checkout_list'>
        <Container>

          <Row>

{/* form ban trai */}


            <Col lg={6} className='form_left'>
            <h4>Thông Tin nhận hàng</h4>
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
                        placeholder="...@gmail.com"
                        type="email"
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
                        name="password"
                        placeholder="ho va ten"
                        type="text"
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
                        name="city"
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



              </Form>

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
              <Button onClick={()=>handle_checkout()}>đặt hàng</Button>
              </div>
            </Col>
            {/* form ben phai */}
          </Row>
        </Container>
      </div>




    </>
  )
}
