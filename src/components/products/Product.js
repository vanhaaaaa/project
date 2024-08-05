import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardSubtitle, CardTitle, Col } from 'reactstrap'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import './product.scss';
import ScrollAnimation from 'react-animate-on-scroll';
export default function Product(props) {
    const { item, index } = props
    return (
        <>
            <Col lg={4} md={6} xs={6} >
                <ScrollAnimation animateIn='flipInY' initiallyVisible={true}
                    animateOnce={true}>
                    <Card className='TTsp'>

                        <div className='card_img' >
                            <img 
                                alt="Sample"
                                src={item.img}
                            />
                        </div>
                        <CardBody className=''>
                            <Link>
                                <CardSubtitle
                                    className="  text-muted  text-uppercase fw-light"
                                    tag="h7"
                                >
                                    {item.sex}
                                </CardSubtitle>
                                <CardTitle className='' tag="h6">
                                    {item.name}

                                </CardTitle>
                            </Link>
                            <CardSubtitle
                                className=" text-muted mt-2"
                                tag="h6"
                            >
                                {item.price}
                            </CardSubtitle>

                            <div className='btn_add'>
                                <Button >       <Link to={`/detail/${item.id}`}>   <AddShoppingCartRoundedIcon /></Link>

                                </Button>
                            </div>
                        </CardBody>
                        <div key={index}></div>
                    </Card>

                </ScrollAnimation>
            </Col>
        </>
    )
}
