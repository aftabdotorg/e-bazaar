import styled from "styled-components";
import { medium } from "../../utils/responsive";

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
  return (
    <Container>
      <h3>Personal Information</h3>
      <Form>
        <Flexer>
          <InputContainer>
            <Label>First name</Label>
            <Input placeholder="John" />
          </InputContainer>
          <InputContainer>
            <Label>Last name</Label>
            <Input placeholder="Doe" />
          </InputContainer>
        </Flexer>
        <InputContainer>
          <Label>Email address</Label>
          <Input placeholder="email" />
        </InputContainer>
        <InputContainer>
          <Label>Country</Label>
          <Select>
            <option value="India">India</option>
            <option value="Germany">Germany</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="Dubai">Dubai</option>
          </Select>
        </InputContainer>
        <InputContainer>
          <Label>Street Address</Label>
          <Input />
        </InputContainer>
        <Flexer>
          <InputContainer>
            <Label>City</Label>
            <Input />
          </InputContainer>
          <InputContainer>
            <Label>State / Province</Label>
            <Input />
          </InputContainer>
          <InputContainer>
            <Label>Zip / Postal code</Label>
            <Input />
          </InputContainer>
        </Flexer>
      </Form>

      <h3>Saved Addresses</h3>
      <InputContainer>
        <Flexer>
          <input type="radio" name="" id="" />
          <AddressBox>
            <Text>name</Text>
            <Text>email</Text>
            <Text>phone</Text>
            <div></div>
          </AddressBox>
        </Flexer>
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
