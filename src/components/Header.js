import React from "react";
import Hamburger from "./styled/Hamburger.styled";
import { StyledHeader, Logo, DashboardButton } from "./styled/Header.styled";
import Navbar from "./styled/Navbar.styled";

function Header() {
  return (
    <StyledHeader>
      <Logo>UNX</Logo>
      <Hamburger />
      <Navbar />
      <DashboardButton>Dashboard</DashboardButton>
    </StyledHeader>
  );
}

export default Header;
