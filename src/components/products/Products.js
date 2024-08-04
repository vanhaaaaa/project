import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap'
import { fetchApi } from '../../redux/productSlice';
import Product from './Product';

export default function Products() {
  const dispatch = useDispatch();


  const { items, status, error } = useSelector(state => state.products)
  useEffect(() => {
    if (status === 'start') {
      dispatch(fetchApi());
    }

  }, []);
  return (
    <>

      <Container>






        <Row>
          <Col lg={3} md={3}>
          foolter
          </Col>

          <Col lg={9} md={9}  >
ben san pham
            <Row>
           
              {
                  items.map((item,index)=>(

                    <Product key={index} item={item}/>

                  )
                )}
           
         
            </Row>

          </Col>
        </Row>




      </Container>



    </>
  )
}



// {
//   prodMale.map((item, index) =>
   
//       <Col  xs={6} sm={6} md={4} lg={3} >
      
//       <Card className='TTsp'>
//           <div className='card_img' >
//           <img height={"100%"}
//           width={"100%"}
//               alt="Sample"
//               src={item.img}
//           />
//           </div>
//           <CardBody className='mt-2'>
//           <Link>
//           <CardSubtitle
//                   className="mb-2 text-muted text-uppercase fw-light"
//                   tag="h7"
//               >
//                 Đồng Hồ Nam
//               </CardSubtitle>
//               <CardTitle tag="h6">
//                     {item.name}
               
//               </CardTitle>
//               </Link>
//               <CardSubtitle
//                   className="mb-2 text-muted"
//                   tag="h6"
//               >
//                    {item.price}
//               </CardSubtitle>
             
//              <div className='btn_add'>
//               <Button >
//                <AddShoppingCartRoundedIcon/>
//               </Button>
//               </div>
//           </CardBody>
//           <div key={index}></div>
//       </Card>
      
//       </Col>
   
//   )}