import React from 'react'


import { Col, Container, Row } from 'reactstrap'
import style from './about.module.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function About() {
      document.title = "AW About"
    return (
        <>
            <Header />

            <div id={style.about}>
            <Container className={style.container}>
                        <h2 className='text-center'>Tin Tức && Sự kiện</h2>

                <Row>


                    <Col lg={6} md={12}>
                    <div className={style.about_img}>
                        <img style={style.img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMIdj7JmVS0zzpOhbexHPGsJuQ2cs0gEiPBg&usqp=CAU'/>
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <h4>Vì sao các hãng đồng hồ Thụy Sỹ luôn được yêu thích nhất?</h4>
                        <p>Có thể nói, hai chữ “Swiss Made” không đơn giản chỉ là cách để nhận biết xuất xứ của chiếc đồng hồ, mà nó còn là lời khẳng định cho chất lượng và sự đảm bảo về quá trình kiểm định nghiêm ngặt nhất thế giới. Do đó, những chiếc đồng hồ Thụy Sỹ vẫn luôn được người dùng đánh giá cao về giá trị chất lượng lẫn giá trị thương hiệu. Phần lớn các hãng đồng hồ cao cấp, xa xỉ trên thế giới hiện nay là đến từ Thụy Sỹ. </p>
                    </Col>
                </Row>






                <Row className='mt-2'> 

                <Col lg={6} md={12} className='text-end'>
    <h4>Thương hiệu đồng hồ Thụy Sỹ Breitling</h4>
    <p>Breitling là thương hiệu đồng hồ đeo tay sở hữu thiết kế ấn tượng và chất lượng đỉnh cao mà bất cứ tín đồ nào cũng đều khao khát muốn có. Lấy ý tưởng từ sức mạnh của những người lính phi công hay thủy thủ. Đồng hồ Breitling nổi tiếng và trung thành với những cỗ máy bấm giờ thể thao, đặc biệt là thước đo Loga cùng tính năng Chronograph nổi trội.  </p>
</Col>
<Col lg={6} md={12} >
<div className='about_img text-start' >
    <img src='https://cdn.galle.vn/media/upload_images/images/thuong-hieu-dong-ho-thuy-sy-dong-ho-breitling.jpg'/>
    </div>
</Col>

</Row>


<Row className='mt-2'> 

<Col lg={12} md={12} className='text-center'>
<h4>Đồng hồ mặt số màu đen của Longines</h4>
<p>Breitling là thương hiệu đồng hồ đeo tay sở hữu thiết kế ấn tượng và chất lượng đỉnh cao mà bất cứ tín đồ nào cũng đều khao khát muốn có. Lấy ý tưởng từ sức mạnh của những người lính phi công hay thủy thủ. Đồng hồ Breitling nổi tiếng và trung thành với những cỗ máy bấm giờ thể thao, đặc biệt là thước đo Loga cùng tính năng Chronograph nổi trội.  </p>
<img width={50+'%'} src='https://donghoduyanh.com/upload_images/images/2024/03/07/Untitled(3).jpg'/>
<p>Đồng hồ Blancpain</p>
</Col>


</Row>
            </Container>
            </div>
            <Footer />

        </>
    )
}
