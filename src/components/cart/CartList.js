import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Container, Input, Row, Table } from 'reactstrap';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import './cart.scss'
import { clearCart, decrementQuantity, deleteCart, incrementQuantity } from '../../redux/cartSlice';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
export default function CartList() {
    const dispatch = useDispatch();
    const { cart, totalAmount, totalQuantity } = useSelector(state => state.cart)
    const navigate = useNavigate();
    const handle_checkout = () => {
        let timerInterval;
        Swal.fire({
            title: "đợi 1 chút nhé!",
            html: "đang tới trang thanh toán",
            icon: "info",
            timer: 1200,
            timerProgressBar: true,
            showConfirmButton: false,
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
            navigate('/checkout')
        });


    }
    const handle_delete = (id) => {

        Swal.fire({
            title: "bạn có muốn xóa không?",
          
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "có!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "đã xóa!",
                
                    icon: "success"
                });
                dispatch(deleteCart(id))
            }

        });

    }
const handle_deleteALl=()=>{
    Swal.fire({
        title: "bạn có muốn xóa không?",
      
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "có!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "đã xóa!",
            
                icon: "success"
            });
            dispatch(clearCart())
        }

    });
    
}
    return (
        <>
            <div id='cart'>
{cart!="" ?

                <Container>
                    <h3>Giỏ hàng của bạn</h3>
                    <Row>
                        <Col lg={9}>
                            <Table>
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
                                                <Button onClick={() => handle_delete(item.id)} className='btn_delete'>
                                                    <DeleteForeverRoundedIcon />
                                                </Button>

                                            </td>
                                        </tr>

                                    ))}





                                </tbody>
                            </Table>
                            <Row>

                                <Col lg={3}>
                                    <Link className='text-decoration-none  ' to={"/products"}>    <Button style={{ background: '#567171' }}  >tiếp tục mua hàng</Button> </Link>
                                </Col>
                                <Col lg={4}>
                                    <Button style={{ background: 'red' }} onClick={() => handle_deleteALl() }     >xóa tất cả sản phẩm</Button>
                                </Col>
                            </Row>
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
                            <Button onClick={() => handle_checkout()}>Thanh toán</Button>
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
