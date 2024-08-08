import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Container, Input, Row, Table } from 'reactstrap';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import './cart.scss'
import { clearCart, decrementQuantity, deleteCart, incrementQuantity } from '../../redux/cartSlice';
import { Link } from 'react-router-dom';
export default function CartList() {
    const dispatch = useDispatch();
    const { cart, totalAmount, totalQuantity } = useSelector(state => state.cart)


    return (
        <>





            <div id='cart'>
                {
                    cart != "" ?
                        <Container>






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
                                                    {new Intl.NumberFormat("en-US").format(item.price)}
                                           
                                           ₫

                                                    </td>
                                                    <td>
                                                        <div className='btn_added d-flex'>
                                                            <Input type='button' onClick={() => dispatch(decrementQuantity(item.id))} disabled={item.quantity == 1 ? true : false} value={'-'} />
                                                            <Input type='number' min={1} value={item.quantity} onChange={(e) => e.target.value} />
                                                            <Input type='button' onClick={() => dispatch(incrementQuantity(item.id))} value={'+'} />



                                                        </div>
                                                    </td>
                                                    <td>
                                                        <Button onClick={() => dispatch(deleteCart(item.id))} className='btn_delete'>
                                                            <DeleteForeverRoundedIcon />
                                                        </Button>

                                                    </td>
                                                </tr>

                                            ))}





                                        </tbody>
                                    </Table>
                                    <Link className='text-decoration-none' to={"/products"}>    <Button   >tiep tuc mua sam</Button> </Link>
                                    <Button onClick={() => dispatch(clearCart())}     >xóa tất cả sản phẩm</Button>
                                </Col>

                                <Col lg={3} className='checkout_cart' >
                                    <h4>Tổng số lượng</h4>
                                    <Table
                                    >

                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    Tổng tiền
                                                </th>
                                                <td>
                                           {new Intl.NumberFormat("en-US").format(totalAmount)}
                                           
                                           ₫
                                                </td>

                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    Số lượng sản phẩm
                                                </th>


                                                <td>
                                                    {totalQuantity}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    Tổng cộng
                                                </th>
                                                <td>

                                                    {

new Intl.NumberFormat("en-US").format(totalAmount)}₫

                                                </td>

                                            </tr>
                                        </tbody>
                                    </Table>
                                    <Button>Thanh toán</Button>
                                </Col>
                            </Row>

                        </Container> :
                        <Container style={{ height: 500 + 'px' }}>

                            <div className='cart_alert text-center'>
                                <h3>Hãy mua sản phẩm </h3>
                                <p>bạn chưa có sản phẩm nào trogn giỏ hàng</p>

                                <Link className='text-decoration-none' to={"/products"}>    <Button   >tiep tuc mua sam</Button> </Link>
                            </div>
                        </Container>
                }

            </div>
        </>
    )
}
