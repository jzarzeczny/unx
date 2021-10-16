import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  width: 200px;
  background-color: #3747d7;
  z-index: 1;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.5s ease-in-out;
`;
const StyledList = styled.ul`
  height: 100%;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const StyledListElement = styled.li`
  font-size: 20px;
  font-weight: 700;
`;

const StyledLink = styled.a`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #fff;
  }
`;

function Navbar({ open, menuList }) {
  return (
    <StyledNavbar open={open}>
      <StyledList>
        {menuList &&
          menuList.map((link, id) => (
            <StyledListElement key={id}>
              <StyledLink>{link}</StyledLink>
            </StyledListElement>
          ))}
      </StyledList>
    </StyledNavbar>
  );
}

export default Navbar;
