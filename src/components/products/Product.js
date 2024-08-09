import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardSubtitle, CardTitle, Col } from 'reactstrap'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import './product.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/cartSlice';
import Swal from 'sweetalert2';
export default function Product(props) {
    const dispatch =useDispatch();
    const { item, index } = props

    const handle_add = (item,index)=>{
        Swal.fire({
            position: "top-end",
            imageUrl: item.img,
            imageWidth: 80,
            imageHeight: 100,
            title: item.name + " đã thêm vào giỏ hàng thành công",
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
           
          });
        dispatch(addCart(item, index))
    }
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
                                 {new Intl.NumberFormat("en-US").format(item.price)}
                                           
                                           ₫
                            </CardSubtitle>
            <Link>
                            <div className='btn_add'>
                                <Button onClick={()=>handle_add(item,index)} >       <AddShoppingCartRoundedIcon />

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
