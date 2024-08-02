import React from 'react'
import "./footer.css";
import { Col, Container, Row } from 'reactstrap';
export default function Footer() {
  return (
    <div className='footer'>
<Container>
<Row>


<Col lg={3} md={4} xs={12}>
<h4>Thông tin chung</h4>
<ul>

  <li><a href='/'> Giới thiệu</a> </li>
  <li><a  href='/'>Tin tức - Sự kiện</a>  </li>
  <li><a  href='/'> Hướng dẫn mua hàng Online</a> </li>

</ul>
</Col>

<Col lg={3} md={4} xs={12}>
<h4>Hỗ trợ khách hàng</h4>
<ul>

  <li><a  href='/'>Chính sách & Quy định chung</a>  </li>
  <li><a  href='/'>Chính sách bảo mật thông tin khách hàng</a> </li>
  <li><a  href='/'>Chính sách xử lý dữ liệu cá nhân</a> </li>
  <li><a  href='/'>Chính sách bảo hành</a> </li>
  <li><a  href='/'>Chính sách vận chuyển</a> </li>

</ul>
</Col>


<Col lg={3} md={4} xs={12}>
<h4>Hệ thống cửa hàng</h4>
<ul>

  <li><a href='/'></a> </li>
  <li><a href='/'></a>  </li>
  <li><a href='/'></a>  </li>

</ul>
</Col>
<Col lg={3} md={4} xs={12}>
<h4>Kết nối</h4>
<ul>

<li><a  href='/'>Chính sách & Quy định chung</a>  </li>
  <li><a  href='/'>Chính sách bảo mật thông tin khách hàng</a> </li>
  <li><a  href='/'>Chính sách xử lý dữ liệu cá nhân</a> </li>
  <li><a  href='/'>Chính sách bảo hành</a> </li>
  <li><a  href='/'>Chính sách vận chuyển</a> </li>

</ul>
</Col>

</Row>






</Container>
    </div>
  )
}
