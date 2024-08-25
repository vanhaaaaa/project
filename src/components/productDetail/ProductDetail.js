import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { Button, Card, CardBody, CardSubtitle, CardTitle, Col, Container, Input, Row, Table } from 'reactstrap';

import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/cartSlice';
import Swal from 'sweetalert2';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

import './prodDetail.scss';
import Slider from 'react-slick';
export default function ProductDetail() {
    const navigate = useNavigate();
    const { id, brand } = useParams()
    const [data, setData] = useState({})


    const productde =
    localStorage.getItem("productde") !== null
        ? JSON.parse(localStorage.getItem("productde"))
        : [];
    const [dataTT, setDataTT] = useState([productde])
    const [imgSp, setImgSp] = useState(data.img)
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();

    const url = "https://66a0a2837053166bcabc1470.mockapi.io/product"
    const fetchData = () => {
        axios.get(url + "/" + id)
            .then(function (res) {
                setData(res.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }



    useEffect(() => {
        fetchData();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        fetch('https://66a0a2837053166bcabc1470.mockapi.io/product/')
            .then(response => response.json())
            .then(data => {
                // Lọc sản phẩm theo thương hiệu từ URL
                const filteredProducts = data.filter(product => product.brand == brand);
                
                setDataTT(filteredProducts);
                localStorage.setItem("productde", JSON.stringify(filteredProducts))

            })
            .catch(function (error) {
                console.log(error)
            })
    }, [id])


    const addQuantity = (e) => {
        if (e == "+") {
            setQuantity(prev => prev + 1)

        } else if (e == "-") {
            setQuantity(prev => prev - 1)

        }

    }
    document.title = data.name

    const handle_add = (quantity) => {


        dispatch(addCart({ ...data, quantity: quantity }));

        let timerInterval;

        Swal.fire({

            title: "đợi 1 chút nhé!",
            html: "đang tới trang thanh toán",
            timer: 1000,

            showConfirmButton: false,
            timerProgressBar: true,
            didOpen: () => {

            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then(() => {

            navigate("/cart")
        });

    }
    return (
        <>

            <Container id='prod_detail'>
                <Row>
                    <Col className='prod_left ' lg={6} md={12}>
                        <div className='prod_left_img'>
                            <div className='  prod_img text-center'>
                                <img src={!imgSp ? data.img : imgSp} />


                            </div>
                            <Row className='prod_carosel mt-2  d-flex '>

                                <Col lg={4}>  <Button onClick={() => setImgSp(data.img)}>   <img src={data.img} /> </Button></Col>

                                <Col lg={4}>       <Button className={!data.img1 ? "acitve" : ""} onClick={() => setImgSp(data.img1)}>   <img src={data.img1} /> </Button></Col>
                                <Col lg={4}>      <Button className={!data.img2 ? "acitve" : ""} onClick={() => setImgSp(data.img2)}>     <img src={data.img2} /></Button></Col>



                                <Col lg={4}>     <Button className={!data.img3 ? "acitve" : ""} onClick={() => setImgSp(data.img3)}>      <img src={data.img3} /></Button></Col>

                            </Row>
                        </div>
                    </Col>
                    <Col className='prod_right' lg={6} md={12}>
                        <h3 className='mt-2'> {data.name}</h3>
                        <div className='prod_price'>


                            <h4> {new Intl.NumberFormat("en-US").format(data.price)}

                                ₫</h4>
                        </div>
                        <div className='prod_description'>
                            <p>{data.sex} {data.name} thay cho thiết kế cửa sổ lich cổ điển là thiết kế mới lịch ngày và thứ đều sử dụng đồng hồ kim mang tính hiện đại, trẻ trung. Nổi bật trên nền mặt số đen là thiết kế phá cách kim giây đỏ làm điểm nhấn nổi bật. Dây đeo bằng da tạo vân cá sấu nổi bật với hai đường chỉ may trắng tinh xảo.</p>
                        </div>

                        <div className='btn_added d-flex'>
                            <Input type='button' disabled={quantity == 1 ? true : false} value={'-'} onClick={() => addQuantity("-")} />
                            <Input type='number' min={1} value={quantity} onChange={(e) => e.target.value} />
                            <Input type='button' value={'+'} onClick={() => addQuantity("+")} />


                            <Button onClick={() => handle_add(quantity)} className='btn_addcart'>Thêm vào giỏ hàng</Button>
                        </div>
                    </Col>



                </Row>


                <h5 className='mt-2'>Thông tin bổ sung</h5>

                <Table

                    responsive

                >
                    <thead>
                        <tr>
                            <td>
                                1
                            </td>
                            <th>

                                Bộ máy & Năng lượng
                            </th>

                            <td>
                                Năng Lượng Ánh Sáng
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                2
                            </td>
                            <th scope="row">
                                Chất liệu dây
                            </th>

                            <td>
                                Dây Vải
                            </td>

                        </tr>
                        <tr>
                            <td>
                                3
                            </td>
                            <th scope="row">
                                Chất liệu mặt kính
                            </th>

                            <td>
                                Kính Sapphire
                            </td>

                        </tr>
                        <tr>

                            <td>
                                4
                            </td>
                            <th scope="row">
                                Giới tính
                            </th>
                            <td>
                                {data.sex}
                            </td>

                        </tr>
                        <tr>
                            <td>
                                5
                            </td>
                            <th scope="row">
                                Kích thước mặt số
                            </th>

                            <td>
                                40 – 43 mm
                            </td>

                        </tr>
                    </tbody>
                </Table>

                <div className='prod_TT'> 
                    <h3>Sản phẩm tương tự </h3>

                    <Slider slidesToScroll={1} slidesToShow={3}   infinite= {true} dots={true} speed={500} responsive={[{
  breakpoint: 800,
  settings: {
    slidesToShow: 3,
    slidesToScroll: 3
  }
}, {
  breakpoint: 500,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 2
  }
}]}>

                        {
                            dataTT.map((itemsS, index) => (
                                <div key={index} >
                                    <Link to={`/detail/${itemsS.id}/${itemsS.brand}`} className='add_prod z-index' >
                                  
                                            <Card className='TTsp m-2 z-10' >

                                                <div className='card_img' >
                                                    <img
                                                        alt="Sample"
                                                        src={itemsS.img}
                                                    />
                                                </div>
                                                <CardBody className=''>

                                                    <CardSubtitle
                                                        className="  text-muted  text-uppercase fw-light"
                                                        tag="h6"
                                                    >
                                                        {itemsS.sex}
                                                    </CardSubtitle>
                                                    <CardTitle className='' tag="h6">
                                                        {itemsS.name}

                                                    </CardTitle>

                                                    <CardSubtitle
                                                        className=" text-muted mt-2"
                                                        tag="h6"
                                                    >
                                                        {new Intl.NumberFormat("en-US").format(itemsS.price)}

                                                        ₫
                                                    </CardSubtitle>
                                                    <Link>
                                                        <div className='btn_add'>

                                                        </div>
                                                    </Link>
                                                </CardBody>

                                            </Card>

                                      
                                    </Link>



                                </div>
                            ))
                        }




                    </Slider>
                </div>

            </Container>


        </>
    )
}
