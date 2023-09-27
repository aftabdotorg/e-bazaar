// export const addToCart = async (item) => {
//     try {
//       const response = await fetch(`http://localhost:8080/cart`, {
//         method: "POST",
//         body: JSON.stringify(item),
//         headers: { "content-type": "application/json" },
//       });
//       const data = await response.json();
//     } catch (error) {
//       throw error;
//     }
//   };

export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function fetchCartItemsById(userid) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart?user=" + userid);
    const data = await response.json();
    resolve({ data });
  });
}

export function UpdateToCart(updateItem) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/cart/" + updateItem.id,
      {
        method: "PATCH",
        body: JSON.stringify(updateItem),
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}

export function deletCartItem(itemid) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart/" + itemid, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data: { id: itemid } });
  });
}
