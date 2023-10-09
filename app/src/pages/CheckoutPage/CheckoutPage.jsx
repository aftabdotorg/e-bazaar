import styled from "styled-components";
import { medium } from "../../utils/responsive";
import { useForm } from "react-hook-form";
import {
  selectLoggedUser,
  updateUserAsync,
} from "../../components/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  padding: 1rem;
  /* border: 1px solid black; */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  /* border: 1px solid blue; */
  padding: 1rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: auto; */
  /* gap: 10px; */
  /* justify-content: center; */
  align-items: start;
  margin: 1rem;
  /* border: 1px solid blue; */
`;

const Flexer = styled.div`
  display: flex;
  gap: 2rem;

  ${medium({
    flexWrap: "wrap",
  })}
`;

const AddressBox = styled.div``;

const Label = styled.label``;

const Input = styled.input`
  /* width: auto; */
  /* margin: auto; */
`;

const Select = styled.select`
  /* margin: auto; */
`;

const Button = styled.button``;

const Text = styled.p``;

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedUser);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  console.log(user.addresses);

  return (
    <Container>
      <h3>Personal Information</h3>
      <Form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          dispatch(
            updateUserAsync({ ...user, addresses: [...user.addresses, data] })
          );
          reset();
        })}
      >
        <Flexer>
          <InputContainer>
            <Label htmlFor="name">Name</Label>
            <Input
              placeholder="minato namikaze"
              {...register("name", { required: "name is required" })}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="email">Email address</Label>
            <Input
              placeholder="email@domain.com"
              {...register("email", { required: "email is required" })}
              type="email"
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              placeholder="India"
              {...register("country", { required: "email is required" })}
            />
          </InputContainer>
        </Flexer>
        <Flexer>
          <InputContainer>
            <Label htmlFor="address">Street Address</Label>
            <Input
              placeholder="baker street, london"
              {...register("address", { required: "address is required" })}
              id="address"
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="city">City</Label>
            <Input
              placeholder="london"
              {...register("city", { required: "city is required" })}
              id="city"
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="state">State / Province</Label>
            <Input
              placeholder="maharashtra"
              {...register("state", { required: "state is required" })}
              id="state"
            />
          </InputContainer>
        </Flexer>
        <Flexer>
          <InputContainer>
            <Label htmlFor="phone">Phone</Label>
            <Input
              placeholder="964238****"
              {...register("phone", { required: "phone is required" })}
              id="phone"
              type="number"
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="zip">Zip / Postal code</Label>
            <Input
              placeholder="000000"
              {...register("zip", { required: "zip code is required" })}
              id="zip"
              type="number"
            />
          </InputContainer>
        </Flexer>
        <Flexer>
          <Button>Save Address</Button>
        </Flexer>
      </Form>

      <h3>Saved Addresses</h3>
      <InputContainer>
        {user.addresses.map((ele, i) => (
          <Flexer key={i}>
            <input type="radio" name="" id="" />
            <AddressBox>
              <Text>
                {ele.name} - {ele.phone}
              </Text>
              <Text>
                {ele.address} - {ele.city}.
              </Text>
            </AddressBox>
          </Flexer>
        ))}
      </InputContainer>

      <h3>Payment Methods</h3>
      <InputContainer>
        <Flexer>
          <input type="radio" name="paymentmode" id="card" />
          <label htmlFor="card">Card</label>
        </Flexer>
        <Flexer>
          <input type="radio" name="paymentmode" id="netbanking" />
          <label htmlFor="netbanking">Net banking</label>
        </Flexer>
        <Flexer>
          <input type="radio" name="paymentmode" id="cash" />
          <label htmlFor="cash">Cash on delivery</label>
        </Flexer>
      </InputContainer>

      <Button>Save & proceed</Button>
    </Container>
  );
};

export default CheckoutPage;
