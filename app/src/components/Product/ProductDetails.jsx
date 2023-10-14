import { faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { medium, mobile, tablet } from "../../utils/responsive";
import {
  fetchProductByIdAsync,
  selectProductById,
  selectProductDetailStatus,
  selectProductListStatus,
} from "./productSlice";
import { addToCartAsync, selectCartItems } from "../cart/cartSlice";
import { selectLoggedUser } from "../auth/authSlice";
import { discountedPrice } from "../../utils/helper";
import Loader from "../Loader/Loader";

const Container = styled.div`
  min-height: 80vh;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;

  ${tablet({
    flexDirection: "column",
  })}

  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Image = styled.img`
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 7px;
  width: 350px;
  height: 200px;

  object-fit: contain;
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px 50px;
  gap: 1rem;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-weight: 300;
  font-size: 30px;
`;

const Price = styled.span`
  font-weight: 300;
  font-size: 40px;
`;

const AddContainer = styled.div`
  ${mobile({ width: "100%" })}
`;

const Button = styled.button`
  margin: auto;

  color: #5c176b;
  border: 1px solid #5c176b;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 7px;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #5c176b;
    color: white;
  }
`;

const Text = styled.p`
  font-weight: 500;
`;

const ProductDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const product = useSelector(selectProductById);
  const productStatus = useSelector(selectProductListStatus);
  const user = useSelector(selectLoggedUser);
  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    dispatch(fetchProductByIdAsync(params.id));
  }, [dispatch, params.id]);

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (cartItems.findIndex((item) => item.product.id === product.id) < 0) {
      const newItem = {
       
        product: product.id,
        quantity: 1,
        user: user.id,
      };
      dispatch(addToCartAsync(newItem));
    } else {
      alert("Item Already Added.");
    }
  };

  return (
    <Container>
      <NavLink to={`/products`} className="no_decoration">
        <Button>Back to Products</Button>
      </NavLink>
      {product &&
        (productStatus === "loading" ? (
          <Loader />
        ) : (
          <Wrapper>
            <ImgContainer>
              {product.images?.map((image, i) => (
                <Image src={product.images[i]} alt={product.title} key={i} />
              ))}
            </ImgContainer>
            <InfoContainer>
              <Title>{product.title}</Title>
              <Desc>{product.description}</Desc>
              <Price>${discountedPrice(product)}</Price>

              <Text>
                <FontAwesomeIcon icon={faStar} style={{ color: "#5c176b" }} />{" "}
                {product.rating}
              </Text>
              <AddContainer>
                <Button onClick={handleAddToCart}>ADD TO CART</Button>
              </AddContainer>
            </InfoContainer>
          </Wrapper>
        ))}
    </Container>
  );
};

export default ProductDetails;
