import React from 'react'
import { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
export default function Menu() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <div className="d-flex ">
    <Dropdown isOpen={dropdownOpen} toggle={toggle}  >
      <DropdownToggle style={{border:'none',background:'none',color:'#e2ba48'}}  ><AccountCircleIcon/></DropdownToggle>
      <DropdownMenu dark >
      <Link to={'/login'}>
        <DropdownItem>Đăng nhập</DropdownItem>
        </Link>
      </DropdownMenu>
    </Dropdown>
  </div>
);
}



 