import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paginaton from "../../components/Pagination/Paginaton";
import Card from "../../components/Card/Card";
import { medium, mobile, tablet } from "../../utils/responsive";
import {
  fetchAllProductsAsync,
  fetchProductsByFilterAsync,
  selectAllProducts,
  selectTotalItems,
} from "./productListSlice";
import { ITEMS_PER_PAGE } from "../../store/constants";
import { searchquery } from "../../components/Navbar/navbarSlice";

const filters = [
  {
    id: "category",
    name: "category",
    options: [
      { value: "smartphones", label: "smartphones", checked: false },
      { value: "laptops", label: "laptops", checked: false },
      { value: "fragrances", label: "fragrances", checked: false },
      { value: "skincare", label: "skincare", checked: false },
      { value: "groceries", label: "groceries", checked: false },
      { value: "home-decoration", label: "home decoration", checked: false },
      { value: "furniture", label: "furniture", checked: false },
      { value: "tops", label: "tops", checked: false },
      { value: "womens-dresses", label: "womens dresses", checked: false },
      { value: "womens-shoes", label: "womens shoes", checked: false },
      { value: "mens-shirts", label: "mens shirts", checked: false },
      { value: "mens-shoes", label: "mens shoes", checked: false },
      { value: "mens-watches", label: "mens watches", checked: false },
      { value: "womens-watches", label: "womens watches", checked: false },
      { value: "womens-bags", label: "womens bags", checked: false },
      { value: "womens-jewellery", label: "womens jewellery", checked: false },
      { value: "sunglasses", label: "sunglasses", checked: false },
      { value: "automotive", label: "automotive", checked: false },
      { value: "motorcycle", label: "motorcycle", checked: false },
      { value: "lighting", label: "lighting", checked: false },
    ],
  },
  {
    id: "brand",
    name: "brand",
    options: [
      { value: "Apple", label: "Apple", checked: false },
      { value: "Samsung", label: "Samsung", checked: false },
      { value: "OPPO", label: "OPPO", checked: false },
      { value: "Huawei", label: "Huawei", checked: false },
      {
        value: "Microsoft Surface",
        label: "Microsoft Surface",
        checked: false,
      },
      { value: "Infinix", label: "Infinix", checked: false },
      { value: "HP Pavilion", label: "HP Pavilion", checked: false },
      {
        value: "Impression of Acqua Di Gio",
        label: "Impression of Acqua Di Gio",
        checked: false,
      },
      { value: "Royal_Mirage", label: "Royal_Mirage", checked: false },
      {
        value: "Fog Scent Xpressio",
        label: "Fog Scent Xpressio",
        checked: false,
      },
      { value: "Al Munakh", label: "Al Munakh", checked: false },
      { value: "Lord - Al-Rehab", label: "Lord   Al Rehab", checked: false },
      { value: "L'Oreal Paris", label: "L'Oreal Paris", checked: false },
      { value: "Hemani Tea", label: "Hemani Tea", checked: false },
      { value: "Dermive", label: "Dermive", checked: false },
      { value: "ROREC White Rice", label: "ROREC White Rice", checked: false },
      { value: "Fair & Clear", label: "Fair & Clear", checked: false },
      { value: "Saaf & Khaas", label: "Saaf & Khaas", checked: false },
      { value: "Bake Parlor Big", label: "Bake Parlor Big", checked: false },
      {
        value: "Baking Food Items",
        label: "Baking Food Items",
        checked: false,
      },
      { value: "fauji", label: "fauji", checked: false },
      { value: "Dry Rose", label: "Dry Rose", checked: false },
      { value: "Boho Decor", label: "Boho Decor", checked: false },
      { value: "Flying Wooden", label: "Flying Wooden", checked: false },
      { value: "LED Lights", label: "LED Lights", checked: false },
      { value: "luxury palace", label: "luxury palace", checked: false },
      { value: "Golden", label: "Golden", checked: false },
      {
        value: "Furniture Bed Set",
        label: "Furniture Bed Set",
        checked: false,
      },
      { value: "Ratttan Outdoor", label: "Ratttan Outdoor", checked: false },
      { value: "Kitchen Shelf", label: "Kitchen Shelf", checked: false },
      { value: "Multi Purpose", label: "Multi Purpose", checked: false },
      { value: "AmnaMart", label: "AmnaMart", checked: false },
      {
        value: "Professional Wear",
        label: "Professional Wear",
        checked: false,
      },
      { value: "Soft Cotton", label: "Soft Cotton", checked: false },
      { value: "Top Sweater", label: "Top Sweater", checked: false },
      {
        value: "RED MICKY MOUSE..",
        label: "RED MICKY MOUSE..",
        checked: false,
      },
      { value: "Digital Printed", label: "Digital Printed", checked: false },
      { value: "Ghazi Fabric", label: "Ghazi Fabric", checked: false },
      { value: "IELGY", label: "IELGY", checked: false },
      { value: "IELGY fashion", label: "IELGY fashion", checked: false },
      {
        value: "Synthetic Leather",
        label: "Synthetic Leather",
        checked: false,
      },
      {
        value: "Sandals Flip Flops",
        label: "Sandals Flip Flops",
        checked: false,
      },
      { value: "Maasai Sandals", label: "Maasai Sandals", checked: false },
      { value: "Arrivals Genuine", label: "Arrivals Genuine", checked: false },
      { value: "Vintage Apparel", label: "Vintage Apparel", checked: false },
      { value: "FREE FIRE", label: "FREE FIRE", checked: false },
      { value: "The Warehouse", label: "The Warehouse", checked: false },
      { value: "Sneakers", label: "Sneakers", checked: false },
      { value: "Rubber", label: "Rubber", checked: false },
      { value: "Naviforce", label: "Naviforce", checked: false },
      { value: "SKMEI 9117", label: "SKMEI 9117", checked: false },
      { value: "Strap Skeleton", label: "Strap Skeleton", checked: false },
      { value: "Stainless", label: "Stainless", checked: false },
      { value: "Eastern Watches", label: "Eastern Watches", checked: false },
      { value: "Luxury Digital", label: "Luxury Digital", checked: false },
      { value: "Watch Pearls", label: "Watch Pearls", checked: false },
      { value: "Bracelet", label: "Bracelet", checked: false },
      { value: "LouisWill", label: "LouisWill", checked: false },
      { value: "Copenhagen Luxe", label: "Copenhagen Luxe", checked: false },
      { value: "Steal Frame", label: "Steal Frame", checked: false },
      { value: "Darojay", label: "Darojay", checked: false },
      {
        value: "Fashion Jewellery",
        label: "Fashion Jewellery",
        checked: false,
      },
      { value: "Cuff Butterfly", label: "Cuff Butterfly", checked: false },
      {
        value: "Designer Sun Glasses",
        label: "Designer Sun Glasses",
        checked: false,
      },
      { value: "mastar watch", label: "mastar watch", checked: false },
      { value: "Car Aux", label: "Car Aux", checked: false },
      { value: "W1209 DC12V", label: "W1209 DC12V", checked: false },
      { value: "TC Reusable", label: "TC Reusable", checked: false },
      { value: "Neon LED Light", label: "Neon LED Light", checked: false },
      {
        value: "METRO 70cc Motorcycle - MR70",
        label: "METRO 70cc Motorcycle   MR70",
        checked: false,
      },
      { value: "BRAVE BULL", label: "BRAVE BULL", checked: false },
      { value: "shock absorber", label: "shock absorber", checked: false },
      { value: "JIEPOLLY", label: "JIEPOLLY", checked: false },
      { value: "Xiangle", label: "Xiangle", checked: false },
      {
        value: "lightingbrilliance",
        label: "lightingbrilliance",
        checked: false,
      },
      { value: "Ifei Home", label: "Ifei Home", checked: false },
      { value: "DADAWU", label: "DADAWU", checked: false },
      { value: "YIOSI", label: "YIOSI", checked: false },
    ],
  },
];

const sortBy = [
  { name: "Top Ratings", sort: "rating", order: "desc", current: false },
  { name: "Price: High to Low", sort: "price", order: "desc", current: false },
  { name: "Price: Low to High", sort: "price", order: "asc", current: false },
];

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

const GridContainer = styled.div`
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
  const products = useSelector(selectAllProducts);
  const totalItems = useSelector(selectTotalItems);
  const query = useSelector(searchquery);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState({});
  const [page, setPage] = useState(1);
  console.log(query);

  // HANDLE FILTER FUNCTION
  const handleFilter = (e, ele, item) => {
    console.log(e.target.checked);
    const newFilter = { ...filter };

    if (e.target.checked) {
      if (newFilter[ele.id]) {
        newFilter[ele.id].push(item.value);
      } else {
        newFilter[ele.id] = [item.value];
      }
    } else {
      const index = newFilter[ele.id].findIndex((el) => el === item.value);
      newFilter[ele.id].splice(index, 1);
    }
    console.log({ newFilter });

    setFilter(newFilter);
  };

  // HANDLE SORT FUNCTION
  const handleSort = (e, sortBy) => {
    const sort = { _sort: sortBy.sort, _order: sortBy.order };
    console.log({ sort });
    setSort(sort);
  };

  // HANDLE PAGE FUNCTION
  const handlePagination = (page) => {
    console.log({ page });
    setPage(page);
  };

  useEffect(() => {
    const searchQuery = { q: query };
    const paginationObj = { _page: page, _limit: ITEMS_PER_PAGE };
    dispatch(
      fetchProductsByFilterAsync({ filter, sort, paginationObj, searchQuery })
    );
  }, [dispatch, filter, sort, page, query]);

  useEffect(() => {
    setPage(1);
  }, [totalItems, sort]);

  return (
    <Container>
      {/* LEFT SECTION */}
      <Left>
        {/* SORTING */}
        <FilterContainers>
          <SubHeading>Sort by</SubHeading>
          {sortBy.map((sortBy, i) => (
            <FilterInputParent key={sortBy.name} className="input_parent">
              <input
                type="radio"
                name="sort"
                id={sortBy.name}
                value={sortBy.sort}
                onClick={(e) => handleSort(e, sortBy)}
              />
              <label htmlFor={sortBy.name}>{sortBy.name}</label>
            </FilterInputParent>
          ))}
        </FilterContainers>
        {/* SORTING END */}

        {/* FILTERING */}
        {filters.map((ele) => (
          <FilterContainers key={ele.id}>
            {/* {console.log(ele.id)} */}
            <SubHeading>{ele.name}</SubHeading>

            {ele.options.map((item, i) => (
              <FilterInputParent className="input_parent" key={i}>
                <input
                  type="checkbox"
                  value={item.value}
                  id={`${ele.id}-${item.value}`}
                  onChange={(e) => handleFilter(e, ele, item)}
                />
                <label htmlFor={`${ele.id}-${item.value}`}>{item.label}</label>
              </FilterInputParent>
            ))}
          </FilterContainers>
        ))}
        {/* FILTERING END */}

        {/* PRICE FILTERING */}
        <FilterContainers>
          <SubHeading>Filter by price</SubHeading>
          <FilterInputParent className="input_parent">
            <span>0</span>
            <input type="range" min={0} max={10000} />
            <span>10000</span>
          </FilterInputParent>
        </FilterContainers>
        {/* PRICE FILTERING END */}
      </Left>
      {/* LEFT SECTION END */}

      {/* RIGHT SECTION */}
      <Right>
        {/* PRODUCTS BANNER */}
        <BannerContainer>
          <ProductBanner
            src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="category banner"
          />
          <Info>
            <Title>Products</Title>
          </Info>
        </BannerContainer>
        {/* PRODUCTS BANNER END */}

        {/* PRODUCTS GRID */}
        <GridContainer>
          {products.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </GridContainer>
        {/* PRODUCTS GRID END */}

        {/* PAGINATION */}
        <Paginaton
          page={page}
          setPage={setPage}
          handlePagination={handlePagination}
          totalItems={totalItems}
        />
        {/* PAGINATION END */}
      </Right>
      {/* RIGHT SECTION END */}
    </Container>
  );
};

export default ProductList;
