import React, { useState } from "react";
import Hamburger from "./styled/Hamburger.styled";
import { StyledHeader, Logo, DashboardButton } from "./styled/Header.styled";
import Navbar from "./styled/Navbar.styled";

const menuList = ["Products", "About", "Resources", "Contact"];
function Header() {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <StyledHeader>
      <Logo>UNX</Logo>
      <Hamburger toggleNavbar={toggleNavbar} open={open} />
      <Navbar open={open} menuList={menuList} />
      <DashboardButton>Dashboard</DashboardButton>
    </StyledHeader>
  );
}

export default Header;
