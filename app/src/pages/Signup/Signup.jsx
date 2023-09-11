import styled from "styled-components";
import { Heading } from "../../components/Featuredproducts/FeaturedProducts";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  background-color: #fae6fa;
  padding: 1rem;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  /* border: 1px solid #572064; */
  margin: auto;
  border-radius: 7px;
  width: 500px;
  /* height: 400px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  background-color: #fff;
`;

export const Input = styled.input`
  width: 200px;
  margin: auto;
  border: 2px solid #572064;
  font-size: 16px;
  padding: 0.5rem 1rem;
  font-family: inherit;
  border-radius: 7px;
`;

export const InputSubmit = styled.input.attrs({ type: "submit" })`
  width: 200px;
  margin: auto;
  border: 2px solid #572064;
  font-size: 16px;
  padding: 0.5rem 1rem;
  font-family: inherit;
  border-radius: 7px;
  background-color: #572064;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.95;
  }
`;

export const Text = styled.p`
  font-weight: 600;
`;

const Signup = () => {
  return (
    <Container>
      <Form>
        <Heading>Sign up</Heading>
        <Input placeholder="Enter Name" type="name" />
        <Input placeholder="Enter Email" type="email" />
        <Input type="password" placeholder="Enter password" />
        <Input type="password" placeholder="Confirm password" />
        <InputSubmit type="submit" value="Sign up" />
        <Text>
          Existing User?
            <NavLink className="no_decoration" to="/login">
              {" "}
              Login
            </NavLink>
        </Text>
      </Form>
    </Container>
  );
};

export default Signup;
