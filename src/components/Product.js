import styled from "styled-components";
import productSmall from "../images/app.svg";

const StyledImage = styled.img`
  margin-top: 3rem;
  padding: 0.5rem;
  width: 100%;
  object-fit: cover;
`;

function Product() {
  return <StyledImage src={productSmall} alt="Visualization of product" />;
}

export default Product;
