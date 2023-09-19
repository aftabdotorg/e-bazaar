import React, { useEffect } from "react";
import styled from "styled-components";
import { medium, mobile, tablet } from "../../utils/responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByIdAsync, selectProductById } from "./productListSlice";
import { NavLink, useParams } from "react-router-dom";

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
  border: 1px solid black;
  border-radius: 7px;
  width: 350px;
  height: 200px;
  /* width: 100%; */
  /* height: 50vh; */
  object-fit: contain;

  /* ${tablet({
    height: "50vh",
  })}

  ${medium({
    height: "40vh",
  })}
 
 ${mobile({
    height: "30vh",
  })} */
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 10px 50px;
  /* ${mobile({ padding: "10px" })} */
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

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #572064;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #572064;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Text = styled.p`
  font-weight: 500;
`;

const ProductDetails = () => {
  const params = useParams();
  console.log(params);
  const product = useSelector(selectProductById);
  console.log(product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductByIdAsync(params.id));
    // console.log(product);
  }, [dispatch, params.id]);

  return (
    <Container>
      <NavLink to={`/products`} className="no_decoration">
        <Button>Back to Products</Button>
      </NavLink>
      {product && (
        <Wrapper>
          <ImgContainer>
            {product.images?.map((image, i) => (
              <Image src={product.images[i]} alt={product.title} />
            ))}
          </ImgContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.description}</Desc>
            <Price>${product.price}</Price>

            <Text>
              <FontAwesomeIcon icon={faStar} style={{ color: "#5c176b" }} />{" "}
              {product.rating}
            </Text>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="darkblue" />
                <FilterColor color="gray" />
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Amount>
                  <FontAwesomeIcon icon={faMinus} />
                </Amount>
                <Amount>1</Amount>
                <Amount>
                  <FontAwesomeIcon icon={faPlus} />
                </Amount>
              </AmountContainer>
              <Button>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
      )}
    </Container>
  );
};

export default ProductDetails;
