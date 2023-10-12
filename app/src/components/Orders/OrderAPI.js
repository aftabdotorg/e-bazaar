export function createOrder(order) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/orders", {
      method: "POST",
      body: JSON.stringify(order),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function updateOrderAdmin(order) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/orders/" + order.id, {
      method: "PATCH",
      body: JSON.stringify(order),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

// export const fetchAllOrders = async () => {
//   const response = await fetch("http://localhost:8080/orders");
//   const data = await response.json();
// };

export function fetchAllOrders() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/orders");
    const data = await response.json();
    resolve({ data });
  });
}
