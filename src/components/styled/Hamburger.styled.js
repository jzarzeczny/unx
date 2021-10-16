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
`;
const Line = styled.div`
  width: 13px;
  height: 3px;
  background-color: #fff;
  position: relative;

  &:before,
  &:after {
    content: "";
    width: 26px;
    height: 3px;
    background-color: #fff;
    position: absolute;
    right: 0;
  }
  &:before {
    top: 9px;
  }
  &:after {
    bottom: 9px;
  }
`;

export default function Hamburger() {
  return (
    <StyledHamburger>
      <Line />
    </StyledHamburger>
  );
}
