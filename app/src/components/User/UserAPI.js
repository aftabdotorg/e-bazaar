// export function fetchLoggedUser(userID) {
//   return new Promise(async (resolve) => {
//     const res = await fetch(`https://localhost:8080/users/${userID}`);
//     const data = await res.json();
//     resolve({ data });
//   });
// }

export function fetchLoggedInUserOrders(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/orders/?user.id=" + userId
    );
    const data = await response.json();
    resolve({ data });
  });
}
