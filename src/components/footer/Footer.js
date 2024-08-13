import React, { useEffect, useState } from 'react'
import "./footer.scss";
import { Button, Col, Container, Input, Row } from 'reactstrap';
import logo from "../../assets/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import NorthIcon from '@mui/icons-material/North';

import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import AppleIcon from '@mui/icons-material/Apple';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
<li>  <span><FacebookIcon/></span> <span><YouTubeIcon/></span> <span><TwitterIcon/></span> <span><AppleIcon/></span>  </li>
<li><a  href='/'>Chính sách bảo hành</a> </li>
<li><a  href='/'>Chính sách vận chuyển</a> </li>
<li><a  href='/'>Chính sách & Quy định chung</a>  </li>


 
 


</ul>
</Col>

</Row>


<hr className='mb-0'/>
<span className='d-flex justify-content-center ' >design by viet anh</span>
  <hr className='m-0'/>

<Button className={`hidden-element ${isVisible ? 'visible' : 'hidden'}`}  onClick={()=>scrollTop()} ><NorthIcon/></Button>



</Container>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>
    </div>
  )
}
