import React, { useEffect, useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Input,
 Carousel,
  CarouselItem,
  CarouselIndicators,
} from 'reactstrap';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import "./header.scss";
import logo from "../../assets/logo.png"
import slide1 from "../../assets/slide1.jpg"
import slide2 from "../../assets/slide2.jpg"
import slide3 from "../../assets/slide3.jpg"
import { Link } from 'react-router-dom';

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import Menu from './Menu';
import Lang from './Lang';
import { useTranslation } from 'react-i18next';




const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


export default function Header() {
  const { t } = useTranslation("translation");
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBg, setNavbar] = useState(false);
  const {cart} =useSelector(state=>state.cart)

  const toggle = () => setIsOpen(!isOpen);
  const items = [
    {
      src: slide1,
      altText: 'Đồng hồ Philippe Auguste Tourbillon PA8668 Limited',

    },
    {
      src: slide2,
      altText: 'Đồng hồ Epos Swiss E-',

    },
    {
      src: slide3,
      altText: 'Đồng hồ Atlantic Swiss AT-',

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

      </CarouselItem>
    );
  });
  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);



  const changeBg = () => {

    if (window.scrollY >= 300 && document.title == "AW Home") {
      setNavbar(true);
     

    } else if ( document.title != "AW Home") {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBg);


 
  return (
    <>

      <div id="header">

        <Navbar className={document.title == "AW Home" ?    navbarBg ? "menu_header active " : "menu_header" : "menu_header active " } expand="md">
          <NavbarBrand >  <Link to={"/"}><img className='logo' src={logo} /> </Link></NavbarBrand>

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
            <NavItem>
                <Link to={"/"}>{t('home')}</Link>
            </NavItem>
            <NavItem>
                <Link to={"/products"}>{t('products')}</Link>
            </NavItem>
            <NavItem>
                <Link to={"/about"}>{t('about')}</Link>
            </NavItem>
            <NavItem>
                <Link to={"/contact"}>{t('contact')}</Link>
            </NavItem>

            </Nav>


   


            <div className='box'>

              <Input type='text' placeholder='ban muon mua gi?' />
              <span><SearchIcon /></span>
            </div>
            <div className='d-flex align-items-center justify-content-around'>
              <Link to={"/cart"} >
              <IconButton aria-label="cart" color="light">
                <StyledBadge badgeContent={cart.length} color="white">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>

              </Link>

             
          
           
            <Menu/>
<Lang/>
</div>
          </Collapse>




        </Navbar>


        {
              document.title == "AW Home"?
        <div className='slider'>

        

            <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
              fade={true}
            >
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {slides}


            </Carousel> 
        </div>

:
<div style={{height: 100 + 'px'}}>

        


</div>

          }


      </div>




    </>
  )
}
