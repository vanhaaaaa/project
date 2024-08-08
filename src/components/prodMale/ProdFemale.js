import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Nav, Navbar, NavbarBrand, Row } from 'reactstrap';
import { prodMaleL } from '../../redux/productSlice';
import './prodmale.scss';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import { addCart } from '../../redux/cartSlice';
export default function ProdFemale() {
    const dispatch = useDispatch();
    const { items, status } = useSelector(state => state.products)
    useEffect(() => {
        dispatch(prodMaleL());
    }, []);
    if (status == 'loading') return <div>loading...</div>

    const prodMale = items.filter(item => item.sex == "nu")
    return (
        <>
            <Container id='container'>
                <h1 className='text-center mt-5' >Đồng Hồ Nữ</h1>
                <ScrollAnimation animateIn='fadeIn' initiallyVisible={true}
                    animateOnce={true}>
                    <Row  >
                        {
                            prodMale.map((item, index) =>
                                <Col xs={6} sm={6} md={4} lg={3} key={index} >
                                    <Link to={`/detail/${item.id}`} className='add_prod' >
                                        <Card className='TTsp'>
                                            <div className='card_img' >
                                                <img height={"100%"}
                                                    width={"100%"}
                                                    alt="Sample"
                                                    src={item.img}
                                                />
                                            </div>
                                            <CardBody className='mt-2'>
                                                <CardSubtitle
                                                    className="mb-2 text-muted text-uppercase fw-light "
                                                    tag="h6"
                                                >
                                                    Đồng Hồ Nữ
                                                </CardSubtitle>
                                                <CardTitle tag="h5">
                                                    {item.name}
                                                </CardTitle>
                                                <CardSubtitle
                                                    className="mb-2 text-muted"
                                                    tag="h6"
                                                >
                                                   {new Intl.NumberFormat("en-US").format(item.price)}
                                           
                                           ₫
                                                </CardSubtitle>
                                                <Link>
                                                    <div className='btn_add'>
                                                        <Button onClick={() => dispatch(addCart(item))} >
                                                            <AddShoppingCartRoundedIcon />
                                                        </Button>

                                                    </div>
                                                </Link>
                                            </CardBody>

                                        </Card>
                                    </Link>
                                </Col>
                            )}
                    </Row>
                </ScrollAnimation>
            </Container>
        </>
    )
}
