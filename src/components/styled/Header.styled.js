import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 3rem 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  & > * {
    flex: 1;
  }
`;

export const Logo = styled.h1`
  font-size: 32px;
  font-weight: 700;
  max-width: 250px;
`;

export const DashboardButton = styled.button`
  display: none;
  @media (min-width: 1024px) {
    display: inline-block;
    font-weight: 700;
    font-size: 18px;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 10px;
    background-color: #242424;
    color: #fff;
    max-width: 250px;
    cursor: pointer;
  }
`;
