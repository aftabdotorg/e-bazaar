import React from "react";
import styled from "styled-components";
import { medium, mobile } from "../../utils/responsive";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoggedInUserOrderAsync, selectUserOrders } from "./UserSlice";
import { selectLoggedUser } from "../auth/authSlice";
import { Navigate } from "react-router-dom";

const Container = styled.div`
  min-height: 60vh;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border: 1px solid #572064;
`;

const Product = styled.div`
  background-color: #fae6fa;
  display: flex;
  justify-content: space-between;
  /* border-top: 1px solid #572064; */
  align-items: center;
  padding: 1rem;
  ${medium({ flexDirection: "column" })}
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  /* border: 1px solid black; */
  flex: 2;
  display: flex;

  ${medium({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })}
  ${mobile({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })}
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Summary = styled.div`
  border-bottom: 0.5px solid darkgray;
  padding: 0 20px;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 1rem;
`;

const AddressBox = styled.div``;
const Text = styled.p``;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;
const H3 = styled.h3`
  font-weight: 600;
`;

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedUser);
  const orders = useSelector(selectUserOrders);

  useEffect(() => {
    dispatch(fetchLoggedInUserOrderAsync(user?.id));
  }, []);

  return (
    <Container>
      {!user && <Navigate to="/" replace={true}></Navigate>}
      <div
        style={{
          margin: "auto",
          width: "70vw",
        }}
      >
        <div>
          <h1
            style={{
              textAlign: "center",
              fontWeight: "600",
              textDecoration: "underline",
              textTransform: "uppercase",
            }}
          >
            Your Profile
          </h1>
          <H3>Name : {user?.name}</H3>
          <H3>Email: {user?.email}</H3>
          {user.role === "admin" && <H3>Role: {user?.role}</H3>}

          {user?.addresses.map((ele, i) => (
            <Text key={i}>
              <span>Address {i + 1} : </span>
              <span>
                {ele.address}, {ele.city},{ele.state} - {ele.zip} .
              </span>
            </Text>
          ))}
        </div>
        {orders?.map((order) => (
          <Info key={order?.id}>
            <h2
              style={{
                fontWeight: "400",
                textAlign: "center",
                marginTop: "1rem",
              }}
            >
              Order # {order?.id}
            </h2>
            <h3
              style={{
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              Order Status: {order.status}
            </h3>

            {order.selectedCartItems.map((product) => (
              <Product key={product.id}>
                <ProductDetail>
                  <Image src={product.thumbnail} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product.id}
                    </ProductId>
                    <ProductSize>
                      <b>Size:</b> 37.5
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    Qty: {product.quantity}
                  </ProductAmountContainer>
                  <ProductPrice>$ {product.price}</ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Summary>
              <SummaryItem>
                <SummaryItemText>Total Items</SummaryItemText>
                <SummaryItemPrice>{order.totalItems}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ {order.totalPrice}</SummaryItemPrice>
              </SummaryItem>
              <ProductSize>
                <b>Address:</b>
              </ProductSize>
              <Text>Name: {order.selectedAddress.name}</Text>
              <Text>Phone: {order.selectedAddress.phone}</Text>
              <Text>
                {order.selectedAddress.address}, {order.selectedAddress.city},{" "}
                {order.selectedAddress.state} - {order.selectedAddress.zip} .
              </Text>
            </Summary>
          </Info>
        ))}
      </div>
    </Container>
  );
};

export default UserProfile;
