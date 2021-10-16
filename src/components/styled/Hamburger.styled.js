import styled from "styled-components";

const StyledHamburger = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 3;
  @media (min-width: 1024px) {
    display: none;
  }
`;
const Line = styled.div`
  width: 13px;
  height: 3px;
  background-color: #fff;
  position: relative;
  /* opacity: ${({ open }) => (open ? "0" : "1")}; */
  background-color: ${({ open }) => (open ? "transparent" : "#fff")};
  transition: all 0.5s ease-in-out;

  &:before,
  &:after {
    content: "";
    width: 26px;
    height: 3px;
    background-color: #fff;
    position: absolute;
    right: 0;
    transition: all 0.5s ease-in-out;
  }
  &:before {
    top: ${({ open }) => (open ? "0" : "9px")};

    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }
  &:after {
    bottom: ${({ open }) => (open ? "0" : "9px")};

    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
`;

export default function Hamburger({ toggleNavbar, open }) {
  return (
    <StyledHamburger onClick={toggleNavbar}>
      <Line open={open} />
    </StyledHamburger>
  );
}
