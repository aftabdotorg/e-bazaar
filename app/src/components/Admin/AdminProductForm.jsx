import styled from "styled-components";
import { medium, mobile, tablet } from "../../utils/responsive";
import { useDispatch, useSelector } from "react-redux";
import { selectAllBrands, selectAllCategories } from "../Product/productSlice";
import { useForm } from "react-hook-form";

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 60vh; */
`;

const H1 = styled.h1`
  font-weight: 400;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #572064;
  /* border-radius: 7px; */

  ${medium({
    width: "100%",
    alignItems: "center",
  })}

  ${mobile({ width: "100%" })}
`;

const Label = styled.label`
  font-weight: 500;
`;

const Input = styled.input`
  font-family: inherit;
  width: 300px;
`;

const ParentField = styled.div`
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  ${medium({ flexDirection: "column" })}

  ${mobile({ flexDirection: "column" })}
`;

const Button = styled.button`
  margin: auto;

  color: #5c176b;
  border: 1px solid #5c176b;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  /* border-radius: 7px; */
  padding: 0.2rem 0.3rem;
  cursor: pointer;

  &:hover {
    background-color: #5c176b;
    color: white;
  }
`;

const AdminProductForm = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const brands = useSelector(selectAllBrands);
  const categories = useSelector(selectAllCategories);

  // console.log(categories);

  console.log("in");

  return (
    <Container>
      <H1>Add New Product</H1>
      <Form
        onSubmit={handleSubmit((data) => {
          const newProduct = { ...data };
          newProduct.images = [newProduct.image1, newProduct.image2];
          delete newProduct["image1"];
          delete newProduct["image2"];
          console.log(newProduct);
        })}
      >
        <ParentField>
          <Label htmlFor="title">Product Name:</Label>
          <Input
            type="text"
            placeholder="Name/title"
            id="title"
            {...register("title", { required: "name is required" })}
          ></Input>
        </ParentField>
        <ParentField>
          <Label htmlFor="description">Description:</Label>
          <Input
            type="text"
            placeholder="Enter a short description"
            id="description"
            {...register("description", { required: "desc is required" })}
          ></Input>
        </ParentField>
        <ParentField>
          <Label htmlFor="price">Price:</Label>
          <Input
            type="number"
            placeholder="Enter Price"
            id="price"
            {...register("price", {
              required: "price is required",
              min: 3,
              max: 10000,
            })}
          ></Input>
        </ParentField>
        <ParentField>
          <Label htmlFor="discountPercentage">Discount Percentage:</Label>
          <Input
            type="number"
            placeholder="Discount %"
            id="discountPercentage"
            {...register("discountPercentage", {
              required: "discount is required",
              min: 0,
              max: 100,
            })}
          ></Input>
        </ParentField>
        <ParentField>
          <Label htmlFor="rating">Rating:</Label>
          <Input
            type="number"
            id="rating"
            placeholder="Enter Rating"
            {...register("rating", {
              required: "rating is required",
            })}
          ></Input>
        </ParentField>
        <ParentField>
          <Label htmlFor="stock">Stock:</Label>
          <Input
            type="number"
            placeholder="Stock Number"
            id="stock"
            {...register("stock", {
              required: "stock is required",
            })}
          ></Input>
        </ParentField>
        <ParentField>
          <Label htmlFor="brand">Brand:</Label>

          <select
            {...register("brand", {
              required: "brand is required",
            })}
          >
            <option value="">select brand</option>
            {brands.map((brand, i) => (
              <option key={i} value={brand.value}>
                {brand.label}
              </option>
            ))}
          </select>
        </ParentField>
        <ParentField>
          <Label htmlFor="category">Category:</Label>
          <select
            {...register("category", {
              required: "category is required",
            })}
          >
            <option value="">select category</option>
            {categories.map((category, i) => (
              <option key={i} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </ParentField>
        <ParentField>
          <Label htmlFor="thumbnail">Thumbnail:</Label>
          <Input
            type="text"
            id="thumbnail"
            placeholder="Enter Thumbnail Url"
            {...register("thumbnail", {
              required: "thumbnail is required",
            })}
          ></Input>
        </ParentField>
        <ParentField>
          <Label htmlFor="image1">Image 1:</Label>
          <Input
            type="text"
            id="image1"
            placeholder="Enter Image Url"
            {...register("image1", {
              required: "image is required",
            })}
          ></Input>
        </ParentField>
        <ParentField>
          <Label htmlFor="image2">Image 3:</Label>
          <Input
            type="text"
            id="image2"
            placeholder="Enter Image Url"
            {...register("image2", {
              required: "image is required",
            })}
          ></Input>
        </ParentField>
        <Button type="submit">Add Product</Button>
      </Form>
    </Container>
  );
};

export default AdminProductForm;
