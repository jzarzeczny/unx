import React from "react";
import Hamburger from "./styled/Hamburger.styled";
import { StyledHeader, Logo } from "./styled/Header.styled";

function Header() {
  return (
    <StyledHeader>
      <Logo>UNX</Logo>
      <Hamburger />
    </StyledHeader>
  );
}

export default Header;
