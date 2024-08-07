import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Container, Input, Row, Table } from 'reactstrap';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import './cart.scss'
import Header from '../header/Header';
import Footer from '../footer/Footer';
export default function CartList() {
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cart)
    return (
        <>





            <div id='cart'>
                {
                    cart != "" ?
                        <Container style={{ height: 1500 + 'px' }} >






                            <h3>Giỏ hàng của bạn</h3>


                            <Row>
                                <Col lg={9}>
                                    <Table

                                    >
                                        <thead>
                                            <tr>
                                                <th>
                                                    Tên Sản phẩm
                                                </th>
                                                <th>
                                                    Số Lượng
                                                </th>
                                                <th>
                                                    Đơn giá
                                                </th>
                                                <th>
                                                    Xóa
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {cart?.map((item, index) => (


                                                <tr key={index}>
                                                    <th  >
                                                        <img src={item.img} />    <span>  {item.name} </span>

                                                    </th>
                                                    <td>
                                                        {item.price}

                                                    </td>
                                                    <td>
                                                        <div className='btn_added d-flex'>
                                                            <Input type='button' disabled={item.quantity == 1 ? true : false} value={'-'} />
                                                            <Input type='number' min={1} value={item.quantity} onChange={(e) => e.target.value} />
                                                            <Input type='button' value={'+'} />



                                                        </div>
                                                    </td>
                                                    <td>
                                                        <Button className='btn_delete'>
                                                            <DeleteForeverRoundedIcon />
                                                        </Button>

                                                    </td>
                                                </tr>

                                            ))}





                                        </tbody>
                                    </Table>
                                    <Button     >tiep tuc mua sam</Button>
                                </Col>

                                <Col lg={3} className='checkout_cart' >
                                    <h4>Tổng số lượng</h4>
                                    <Table
                                    >
                                        <thead>
                                            <tr>
                                                <th>
                                                  Tổng tiền
                                                </th>
                                                <td>
                                                    1121212
                                                </td>

                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <th scope="row">
                                                  Số lượng món 
                                                </th>


                                                <td>
                                                    @fat
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                 Tổng cộng
                                                </th>
                                                <td>
                                                    Larry
                                                </td>

                                            </tr>
                                        </tbody>
                                    </Table>
                                    <Button>Thanh toán</Button>
                                </Col>
                            </Row>

                        </Container> :
                        <Container style={{ height: 1500 + 'px' }}>

                            <div className='cart_alert text-center'>
                                <h3>Hãy mua sản phẩm </h3>
                                <p>bạn chưa có sản phẩm nào trogn giỏ hàng</p>
                            </div>
                        </Container>
                }

            </div>
        </>
    )
}
