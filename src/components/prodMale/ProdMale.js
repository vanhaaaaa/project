import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Nav, Navbar, NavbarBrand, Row } from 'reactstrap';
import { fetchApi } from '../../redux/productSlice';
import './prodmale.scss';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
export default function ProdMale() {

    const dispatch = useDispatch();


    const { items, status, error } = useSelector(state => state.products)
    useEffect(() => {
        if (status === 'start') {
            dispatch(fetchApi());
        }

    }, []);

    if (status == 'loading') return <div>loading...</div>
    if (status == 'faild') return <div>{error}</div>

    const prodMale =  items.filter(item => item.sex == "nam")
  return (
    
    <>
     <Container  id='container'>
               
                      

    
    
                   <h1 className='text-center' >Đồng Hồ Nam</h1>
                   <ScrollAnimation    animateIn='fadeIn'   initiallyVisible={true}
  animateOnce={true}>
                   <Row  >
            
                   {
                            prodMale.map((item, index) =>
                             
                                <Col  xs={6} sm={6} md={4} lg={3} >
                                
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
                                          Đồng Hồ Nam
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
                                
                                </Col>
                             
                            )}
                           


                   </Row>
                   </ScrollAnimation>
           </Container>
    
    </>
  )
}
