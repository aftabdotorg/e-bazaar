import React from "react";
import { Container, Form, Input, Text, InputSubmit } from "../Signup/Signup";
import { Heading } from "../../../components/Featuredproducts/FeaturedProducts";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <Form>
        <Heading>Login</Heading>
        <Input placeholder="Enter Email" type="email" />
        <Input type="password" placeholder="Enter password" />
        <InputSubmit type="submit" value="Login" />
        <Text>
          Existing User?
          <NavLink className="no_decoration" to="/register">
            {" "}
            Sign up
          </NavLink>
        </Text>
      </Form>
    </Container>
  );
};

export default Login;
