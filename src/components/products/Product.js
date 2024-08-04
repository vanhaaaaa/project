import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardSubtitle, CardTitle, Col } from 'reactstrap'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import './product.scss';
import ScrollAnimation from 'react-animate-on-scroll';
export default function Product(props) {
    const {item,index} =props
  return (
<>
         <Col lg={4} md={6} xs={6} >
         <ScrollAnimation    animateIn='fadeIn'   initiallyVisible={true}
  animateOnce={true}>
         <Card className='TTsp'>
            
                                    <div className='card_img' >
                                    <img height={"100%"}
                                    width={"100%"}
                                        alt="Sample"
                                        src={item.img}
                                    />
                                    </div>
                                    <CardBody className='mt-2'>
                                    <Link>
                                    <CardSubtitle
                                            className="mb-2 text-muted text-uppercase fw-light"
                                            tag="h7"
                                        >   
                                {item.sex}
                                        </CardSubtitle>
                                        <CardTitle tag="h6">
                                              {item.name}
                                         
                                        </CardTitle>
                                        </Link>
                                        <CardSubtitle
                                            className="mb-2 text-muted"
                                            tag="h6"
                                        >
                                             {item.price}
                                        </CardSubtitle>
                                       
                                       <div className='btn_add'>
                                        <Button >
                                         <AddShoppingCartRoundedIcon/>
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
