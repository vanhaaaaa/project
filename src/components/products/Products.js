import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Row } from 'reactstrap'
import { fetchApi } from '../../redux/productSlice';
import Pagination from "react-js-pagination";
import Product from './Product';
import logo_sitizen from "../../assets/logo_citizen.png"
import logo_olym from "../../assets/logo_olym.png"
import logo_gshock from "../../assets/logo_gshock.png"
import logo_orient from "../../assets/logo_orient.png"
import logo_tissot from "../../assets/logo_tissot.png"
import ArrowDropDownCircleSharpIcon from '@mui/icons-material/ArrowDropDownCircleSharp';
import './product.scss';

export default function Products() {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const toggleNavbar = () => setCollapsed(!collapsed);

  const { items, status, error } = useSelector(state => state.products)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch(fetchApi(currentPage));



  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);



  };
  return (
    <>

      <Container>






        <Row>
          <Col lg={3} md={3}>
            <div className='category_prod'>
              <h4>Bộ lọc</h4>


              <h5>Thương hiệu</h5>
              <div className='category_prod_img'>
                <Button lg={3} md={4}><img src={logo_gshock} /></Button>
                <Button><img src={logo_olym} /></Button>
                <Button><img src={logo_orient} /></Button>
                <Button><img src={logo_sitizen} /></Button>
                <Button><img src={logo_tissot} /></Button>
              </div>

            </div>
            <Navbar color="faded" >
              <h5 onClick={toggleNavbar} style={{ marginLeft: -10 + 'px' }}>Danh mục sản phẩm</h5>
              <ArrowDropDownCircleSharpIcon onClick={toggleNavbar} className="me-2" />
              <Collapse isOpen={collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <Button>Đồng Hồ Nam</Button>
                  </NavItem>
                  <NavItem>
                    <Button>Đồng Hồ Nữ</Button>
                  </NavItem>
                  <NavItem>
                    <Button>Đồng Hồ Đôi</Button>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>

          </Col>

          <Col lg={9} md={9}  >
            ben san pham
            <Row>

              {
                items.map((item, index) => (

                  <Product key={index} item={item} />

                )
                )}


            </Row>
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={6}
              totalItemsCount={20}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
            />
          </Col>


        </Row>




      </Container>



    </>
  )
}


