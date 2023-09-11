import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./Card.css";

const Container = styled.div`
  /* border: 1px solid black; */
  margin: auto;
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fae6fa;
  padding: 5px;
  padding-bottom: 10px;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const ImageParent = styled.div`
  width: 100%;
  height: 270px;
  overflow: hidden;
  position: relative;

  &:hover {
    .img2 {
      z-index: 2;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  border-radius: 7px;
`;
const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: black;
  padding-left: 10px;
`;
const PriceParent = styled.div`
  padding-left: 10px;
  display: flex;
  gap: 1rem;
`;

const Text = styled.p`
  font-weight: 500;

  &:first-child {
    color: gray;
    text-decoration: line-through;
  }

  &:last-child {
    color: black;
  }
`;

const BtnContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  margin: auto;
  /* width: 60%; */
  /* background-color: #5c176b; */
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

const Card = ({ item }) => {
  return (
    <Container>
      <NavLink to={`/products/:id`} className="no_decoration">
        <ImageParent className="image_parent">
          <Image src={item.img} alt={item.title} className="img1" />

          <Image src={item.img2} alt={item.title} className="img2" />
        </ImageParent>
      </NavLink>
      <Title>{item.title}</Title>
      <PriceParent>
        <Text>₹ {item.oldPrice}</Text>
        <Text>₹ {item.price}</Text>
      </PriceParent>
      <BtnContainer>
        <Button>
          <FontAwesomeIcon icon={faMinus} />
        </Button>
        <NavLink to="/cart" className="no_decoration">
          <Button>Add To Cart</Button>
        </NavLink>
        <Button>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </BtnContainer>
    </Container>
  );
};

export default Card;
