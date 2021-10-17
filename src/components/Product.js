import styled from "styled-components";
import product from "../images/appLarge.svg";

const StyledImage = styled.img`
  margin-top: 3rem;
  padding: 0.5rem;
  width: 100%;
  object-fit: cover;
  @media (min-width: 1024px) {
    width: 80%;
    margin: 0 10%;
    animation: image-slide-in 1.5s forwards;
  }
  @keyframes image-slide-in {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

function Product() {
  return <StyledImage src={product} alt="Visualization of product" />;
}

export default Product;
