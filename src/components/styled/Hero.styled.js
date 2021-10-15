import styled from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  padding: 2rem;
`;
export const HeroTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  background: ${({ gradient }) =>
    gradient && "linear-gradient(270deg, #A5D9FF 7.6%, #7399FB 94.15%)"};
  background-clip: ${({ gradient }) => gradient && "text"};
  -webkit-text-fill-color: ${({ gradient }) => gradient && "transparent"};
  &:last-of-type {
    margin-bottom: 3rem;
  }
`;
export const HeroPara = styled.p`
  padding: 0 0.5rem;
  color: #b0b0b0;
  text-align: center;
  margin-bottom: 3rem;
`;

export const HeroButton = styled.button`
  cursor: pointer;
  background-color: #2104d8;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 9px;
  color: #fff;
  font-weight: 700;
  display: block;
  margin: 0 auto;
`;
