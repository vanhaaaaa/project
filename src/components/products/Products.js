import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Collapse, Container, FormGroup, Input, Label, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Row } from 'reactstrap'
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
import MinimumDistanceSlider from './Slider';
import { Slider } from '@mui/material';


export default function Products() {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const [selectedValue, setSelectedValue] = useState(6);
  const [sortOrder, setSortOrder] = useState('');
  const { items } = useSelector(state => state.products)
  const marks = [
    { value: 0, label: 'min' },
    { value: 5_000_000, label: '5 trieu' },
    { value: 10_000_000, label: '10 trieu' },
    { value: 15_000_000, label: '15 trieu' },
    { value: 25_000_000, label: 'max' },
  ];
  const valuetext = (value) => `${value}`;
  const [value1, setValue1] = useState([0, 25_000_000]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch(fetchApi({ page: currentPage, item: selectedValue, sortOrder: sortOrder,    range: value1 }));



  }, [currentPage, selectedValue, sortOrder,value1]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);



  };

  const filterProd = () => {

  }



  const handleSort = (event) => {


    setSelectedValue((parseInt(event.target.value, 10)));
    setCurrentPage(1);

  }

  const handleSortPrice = (event) => {
    const order = event.target.value;
    setSortOrder(order);
    setCurrentPage(1);


  };


  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
    setSelectedValue(20);
    setSortOrder('desc');
  };

  return (
    <>

      <Container>






        <Row>
          <Col lg={3} md={3}>
            <div className='category_prod'>

              <h5>Thương hiệu</h5>
              <div className='category_prod_img'>
                <Button lg={3} md={4} onClick={() => filterProd("CASIO")} ><img src={logo_gshock} /></Button>
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
            <h5>Giá</h5>
            <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        min={0} // Minimum value of the slider
        max={25_000_000} // Maximum value of the slider
        // You can use `step` if needed; for a range slider, `step` is often set to `null`
        step={null} 
        marks={marks}
      />
          </Col>

          <Col lg={9} md={9}  >
            <div className='d-grid sort_items '>
              <FormGroup row className='    justify-content-end'>
                <Label
                  for="exampleSelect"
                  sm={1}

                >
                  more
                </Label>
                <Col sm={10} lg={2}>
                  <Input
                    id="exampleSelect"
                    name="select1"
                    type="select"
                    onChange={handleSort}
                    value={selectedValue}
                  >
                    <option value="6">
                      6
                    </option>
                    <option value="12">
                      12
                    </option>
                    <option value="18">
                      18
                    </option>
                    <option value="20">
                      All
                    </option>
                  </Input>
                </Col>
                <Label
                  for="exampleSelect1"
                  sm={2}
                >
                  sort by price
                </Label>
                <Col sm={10} lg={2}>
                  <Input
                    id="exampleSelect1"
                    name="select"
                    type="select"
                    value={sortOrder}
                    onChange={handleSortPrice}
                  >
                    <option value="">...</option>
                    <option value="asc">Tăng dần</option>
                    <option value="desc">Giảm dần</option>

                  </Input>
                </Col>
              </FormGroup></div>

            <Row>

              {
                items.map((item, index) => (

                  <Product key={index} item={item} />

                )
                )}


            </Row>
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={selectedValue}
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


