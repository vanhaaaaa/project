import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Input,
  Container, Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./header.css";
import logo from "../../assets/logo.png"



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


export default function Header() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const items = [
    {
      src: 'https://dangquangwatch.vn/upload/product_small/Dong-ho-Thuy-Sy-E-3501139251535-1795494729.jpg',
      altText: 'Đồng hồ Philippe Auguste Tourbillon PA8668 Limited',
      caption: '12.670.000đ',
      key: 1,
    },
    {
      src: 'https://dangquangwatch.vn/upload/product_small/dong-ho-rong-phien-ban-gioi-han1-744753900.jpg',
      altText: 'Đồng hồ Epos Swiss E-',
      caption: '69.000.000đ',
      key: 2,
    },
    {
      src: 'https://dangquangwatch.vn/upload/product_small/dong-ho-cao-cap-rong-85762207.jpg',
      altText: 'Đồng hồ Atlantic Swiss AT-',
      caption: '8.225.000đ',
      key: 3,
    },
  ];
  
  
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption 
          captionText={item.caption}
          captionHeader={item.altText}
        />
      </CarouselItem>
    );
  });
  return (
    <>

      <div className='header'>
        <Container>
          <Navbar className='menu_header' expand="md">
            <NavbarBrand href="/"><img className='logo' src={logo} /></NavbarBrand>

            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">product</NavLink>
                </NavItem>
              
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>




            </Collapse>
            <div className='box'>

              <Input type='text' placeholder='ban muon mua gi?' />

            </div>


            <div>
              <IconButton aria-label="cart" color="light">
                <StyledBadge badgeContent={4} color="white">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </div>
          </Navbar>



        <div className='slider p-2'>

          {
             <Carousel
             activeIndex={activeIndex}
             next={next}
             previous={previous}
              fade={true}
           >
            
             {slides}
          
           
           </Carousel>
          }
        </div>

        </Container>


      </div>

     


    </>
  )
}
