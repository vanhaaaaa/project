import React, { useEffect } from 'react'
import "./footer.scss";
import { Button, Col, Container, Input, Row } from 'reactstrap';
import logo from "../../assets/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import NorthIcon from '@mui/icons-material/North';
export default function Footer() {


  useEffect(() => {
   
  }, []);
  const scrollTop = () =>{   window.scrollTo({top: 0, behavior: 'smooth'});};




  
  
  return (
    <div id='footer'>
<Container>
<Row>


<Col lg={3} md={4} xs={12} className='text-end'>
<h4>Thông tin chung</h4>
<ul>

  <li><a href='/'> Giới thiệu</a> </li>
  <li><a  href='/'>Tin tức - Sự kiện</a>  </li>
  <li><a  href='/'> Hướng dẫn mua hàng Online</a> </li>

</ul>
</Col>

<Col lg={6} md={4} xs={12} className='form_footer text-center'>

    <img src={logo} width={"100px"} />


    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ad.</p>
<div className='ip_footer'>
    <Input type='text' />
    <span><SearchIcon /></span>
    </div>
    <p className='mt-2'>hãy gửi phản hồi vủa bạn về chúng tôi</p>
</Col>



<Col lg={3} md={4} xs={12}>
<h4>Kết nối</h4>
<ul>
<li><a  href='/'>Chính sách bảo hành</a> </li>
<li><a  href='/'>Chính sách vận chuyển</a> </li>
<li><a  href='/'>Chính sách & Quy định chung</a>  </li>
<li><a  href='/'>Chính sách xử lý dữ liệu cá nhân</a> </li>
  <li><a  href='/'>Chính sách bảo mật thông tin khách hàng</a> </li>
 
 


</ul>
</Col>

</Row>


<Button onClick={()=>scrollTop()} ><NorthIcon/></Button>



</Container>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>
    </div>
  )
}
