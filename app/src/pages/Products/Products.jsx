import styled from "styled-components";
import { productsArr } from "../../utils/data";
import { medium, mobile, tablet } from "../../utils/responsive";
import ProductCard from "../../components/ProductCard/ProductCard";
// import ProductList from "../../components/ProductList/ProductList";
import Paginaton from "../../components/Pagination/Paginaton";
import ProductList from "../../features/product-list/ProductList";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  /* position: relative; */

  ${mobile({
    flexDirection: "column",
  })}
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 3;
  /* padding: 1rem; */
  /* border: 1px solid black; */
`;
const FilterContainers = styled.div`
  padding: 1rem;
  align-items: center;
  ${mobile({
    textAlign: "center",
  })}
`;

const FilterInputParent = styled.div`
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 400;
`;

const Wrapper = styled.div`
  padding: 1rem;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  ${medium({
    gap: "5px",
    gridTemplateColumns: "repeat(2, 1fr)",
  })}

  ${mobile({
    gap: "5px",
    gridTemplateColumns: "repeat(1, 1fr)",
  })}
`;

const Heading = styled.h1`
  text-align: center;
  font-weight: 500;
  color: #572064;
`;

const SubHeading = styled.h3`
  background-color: #fae6fa;
  /* text-align: center; */
  font-weight: 500;
  text-transform: uppercase;
  /* color: #572064; */
  padding-left: 3px;
`;

const BannerContainer = styled.div`
  position: relative;
  height: 150px;
  padding-bottom: 1rem;
  /* padding-left: 1rem; */

  ${mobile({
    display: "none",
  })}
`;

const ProductBanner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(50%);
  border-radius: 7px;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  font-weight: 500;
  font-family: inherit;
`;

const Products = () => {
  return (
    <>
      <Container>
        <Left>
          <FilterContainers>
            <SubHeading>Categories</SubHeading>
            <FilterInputParent className="input_parent">
              <input type="checkbox" value={1} id="1" />
              <label htmlFor="1">Men</label>
            </FilterInputParent>
            <FilterInputParent className="input_parent">
              <input type="checkbox" value={2} id="2" />
              <label htmlFor="2">Women</label>
            </FilterInputParent>
            <FilterInputParent className="input_parent">
              <input type="checkbox" value={3} id="3" />
              <label htmlFor="3">Kids</label>
            </FilterInputParent>
          </FilterContainers>
          <FilterContainers>
            <SubHeading>Filter by price</SubHeading>
            <FilterInputParent className="input_parent">
              <span>0</span>
              <input type="range" min={0} max={10000} />
              <span>10000</span>
            </FilterInputParent>
          </FilterContainers>
          <FilterContainers>
            <SubHeading>Sort by</SubHeading>
            <FilterInputParent className="input_parent">
              <input type="radio" name="price" id="asc" value="asc" />
              <label htmlFor="asc">Low to High</label>
            </FilterInputParent>
            <FilterInputParent className="input_parent">
              <input type="radio" name="price" id="desc" value="desc" />
              <label htmlFor="desc">High to Low</label>
            </FilterInputParent>
          </FilterContainers>
        </Left>

        <Right>
          <BannerContainer>
            <ProductBanner
              src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="category banner"
            />
            <Info>
              <Title>Products</Title>
            </Info>
          </BannerContainer>
          <ProductList />
          <Paginaton />
        </Right>
      </Container>
    </>
  );
};

export default Products;
