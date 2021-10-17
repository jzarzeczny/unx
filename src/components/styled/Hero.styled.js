import styled, { keyframes } from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  padding: 2rem;
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 400px;
    height: 400px;
    background-color: #3747d7;
    border-radius: 50%;
    filter: blur(624px);
    bottom: 0;
    left: -100px;
    opacity: 0.2;
  }
  @media (min-width: 1024px) {
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 500px;
      height: 500px;
      background-color: #3747d7;
      border-radius: 50%;
      filter: blur(600px);
      bottom: -150px;
      left: 20vw;
      opacity: 0.3;
      z-index: -2;
      animation: size-of-bulb 5s infinite;
    }
  }
  @keyframes size-of-bulb {
    0% {
      width: 500px;
      height: 500px;
    }
    25% {
      width: 250px;
      height: 500px;
    }
    50% {
      width: 250px;
      height: 250px;
    }
    75% {
      width: 500px;
      height: 250px;
    }
    100% {
      width: 500px;
      height: 500px;
    }
  }
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
  @media (min-width: 1024px) {
    font-size: 64px;
  }
`;
export const HeroPara = styled.p`
  padding: 0 0.5rem;
  color: #b0b0b0;
  text-align: center;
  margin-bottom: 3rem;
  @media (min-width: 1024px) {
    width: 60ch;
    margin: 0 auto 3rem;
  }
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
