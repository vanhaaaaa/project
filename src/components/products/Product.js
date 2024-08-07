import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardSubtitle, CardTitle, Col } from 'reactstrap'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import './product.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/cartSlice';
export default function Product(props) {
    const dispatch =useDispatch();
    const { item, index } = props
    return (
        <>


            <Col lg={4} md={6} xs={6} >
            <Link to={`/detail/${item.id}` } className='add_prod' > 
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
                           
                                <CardSubtitle
                                    className="  text-muted  text-uppercase fw-light"
                                    tag="h6"
                                >
                                    {item.sex}
                                </CardSubtitle>
                                <CardTitle className='' tag="h6">
                                    {item.name}

                                </CardTitle>
                          
                            <CardSubtitle
                                className=" text-muted mt-2"
                                tag="h6"
                            >
                                {item.price}
                            </CardSubtitle>
            <Link>
                            <div className='btn_add'>
                                <Button onClick={()=>dispatch(addCart(item, index))} >       <AddShoppingCartRoundedIcon />

                                </Button>
                            </div>
                            </Link>
                        </CardBody>
                      
                    </Card>

                </ScrollAnimation>
                </Link>
            </Col>
        
        </>
    )
}
