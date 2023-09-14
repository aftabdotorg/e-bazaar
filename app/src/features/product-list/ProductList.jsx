import styled from "styled-components";
import React from "react";
import { products } from "../../utils/data";
import Card from "../../components/Card/Card";
import { medium, mobile, tablet } from "../../utils/responsive";

const data = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/13833041/pexels-photo-13833041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/16831785/pexels-photo-16831785/free-photo-of-back-view-of-a-young-man-wearing-a-graphic-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Graphic T-shirt",
    oldPrice: 1200,
    price: 1000,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/840916/pexels-photo-840916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/1643025/pexels-photo-1643025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Coat",
    oldPrice: 1200,
    price: 1000,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1687719/pexels-photo-1687719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Hat",
    oldPrice: 700,
    price: 450,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/5303044/pexels-photo-5303044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/5191436/pexels-photo-5191436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Shirt",
    oldPrice: 1000,
    price: 700,
  },
];

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-content: center;
  /* border: 1px solid blue; */
  margin: auto;

  ${tablet({
    gridTemplateColumns: "repeat(2, 1fr)",
  })}

  ${medium({
    gridTemplateColumns: "repeat(1, 1fr)",
  })}

  ${mobile({
    gridTemplateColumns: "repeat(1, 1fr)",
  })}
`;

const ProductList = () => {
  return (
    <Container>
      {products.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default ProductList;
