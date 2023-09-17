export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilter(filter, sort, paginationObj, searchQuery) {
  let queryStr = "";
 
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const finalCategoryValue = categoryValues[categoryValues.length - 1];
      queryStr += `${key}=${finalCategoryValue}&`;
    }
  }

  for (let key in sort) {
    queryStr += `${key}=${sort[key]}&`;
  }
 
  for (let key in paginationObj) {
    queryStr += `${key}=${paginationObj[key]}&`;
  }
 
  for (let key in searchQuery) {
    queryStr += `${key}=${searchQuery[key]}&`;
  }

  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/products?` + queryStr);
    const data = await response.json();
    // resolve({ data });
    const totalItems = await response.headers.get("X-Total-Count");

    resolve({ data: { products: data, totalItems: +totalItems } });
    // console.log({data});
  });
}
