import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Button, Col, Container, Input, Row } from 'reactstrap';
import './prodDetail.scss';
export default function ProductDetail() {
    const { id } = useParams()
    const [data, setData] = useState({})
    const [imgSp, setImgSp] = useState(data.img)
    const [quantity,setQuantity]=useState(1)
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
    }, [])


   const  addQuantity=(e)=>{
    if(e =="+"){
        setQuantity(prev=>prev+1)
    }else if(e=="-"){
        setQuantity(prev=>prev-1)
    }

   }
    document.title = data.name
    return (
        <>

            <Container id='prod_detail'>
                <Row>
                    <Col className='prod_left ' lg={6} md={12}>
                        <div className='prod_left_img'>
                            <div className='  prod_img text-center'>
                                <img src={!imgSp ? data.img : imgSp} />


                            </div>
                            <Row className='prod_carosel mt-2  d-flex     '>

                                <Col lg={4}>  <Button onClick={() => setImgSp(data.img)}>   <img src={data.img} /> </Button></Col>
                              
                                <Col lg={4}>       <Button className={!data.img1 ? "acitve" : ""} onClick={() => setImgSp(data.img1)}>   <img src={data.img1} /> </Button></Col>
                                <Col lg={4}>      <Button className={!data.img2 ? "acitve" : ""} onClick={() => setImgSp(data.img2)}>     <img src={data.img2} /></Button></Col>



                                <Col lg={4}>     <Button className={!data.img3 ? "acitve" : ""} onClick={() => setImgSp(data.img3)}>      <img src={data.img3} /></Button></Col>

                            </Row>
                        </div>
                    </Col>
                    <Col className='prod_right' lg={6} md={12}>
                        <h3> {data.name}</h3>
                        <div className='prod_price'>


                            <h4> {data.price}</h4>
                        </div>
                        <div className='prod_description'>
                            <p>{data.sex} {data.name} thay cho thiết kế cửa sổ lich cổ điển là thiết kế mới lịch ngày và thứ đều sử dụng đồng hồ kim mang tính hiện đại, trẻ trung. Nổi bật trên nền mặt số đen là thiết kế phá cách kim giây đỏ làm điểm nhấn nổi bật. Dây đeo bằng da tạo vân cá sấu nổi bật với hai đường chỉ may trắng tinh xảo.</p>
                        </div>

                <div className='btn_added d-flex'>
                                <Input type='button' disabled={quantity==1?true:false}   value={'-'} onClick={()=>addQuantity("-")}  />
                                <Input type='number' min={1}  value={quantity} onChange={(e)=>e.target.value}  />
                                <Input type='button'   value={'+'}   onClick={()=>addQuantity("+")} />


                                <Button className='btn_addcart'>them vao gio hang</Button>
                                </div>
                                </Col>
                              


                            </Row>
      
                        </Container>


                    </>
                    )
}
