import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectLoggedUser } from "../auth/authSlice";
import "./adminOrders.css";
import {
  fetchAllOrdersAsync,
  selectAllOrders,
  selectOrdersStatus,
  updateOrderAdminAsync,
} from "../Orders/OrderSlice";
import { useEffect } from "react";
import { discountedPrice } from "../../utils/helper";
import Loader from "../Loader/Loader";

const Container = styled.div`
`;

const H3 = styled.h3`
  font-weight: 600;
`;

const AdminOrders = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedUser);
  const orders = useSelector(selectAllOrders);
  const orderStatus = useSelector(selectOrdersStatus);

  useEffect(() => {
    dispatch(fetchAllOrdersAsync());
  }, [dispatch]);

  const handleOrderStatus = (e, order) => {
    const updatedOrder = { ...order, status: e.target.value };
    dispatch(updateOrderAdminAsync(updatedOrder));
  };

  return (
    <Container>
      <div
        style={{
          margin: "auto",
          width: "70vw",
        }}
      >
        <div>
          <h1
            style={{
              textAlign: "center",
              fontWeight: "600",
              textDecoration: "underline",
              textTransform: "uppercase",
            }}
          >
            Admin Profile & Orders
          </h1>
          <H3>Name : {user.name}</H3>
          <H3>Email: {user.email}</H3>
          {user.role === "admin" && <H3>Role: {user.role}</H3>}
        </div>
      </div>

      <section>
        {orderStatus === "loading" ? (
          <Loader />
        ) : (
          <table className="table">
            <thead className="table_head">
              <tr className="table_head_row">
                <td>OID</td>
                <td>Items</td>
                <td>Amount</td>
                <td>User</td>
                <td>ship to</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>
                    {order.selectedCartItems.map((item) => (
                      <li
                        style={{
                          listStyleType: "none",
                        }}
                        key={item.id}
                      >
                        {item.title}-{item.quantity}-₹{discountedPrice(item)}
                      </li>
                    ))}
                  </td>
                  <td>₹ {order.totalPrice}</td>
                  <td>{order.user.name}</td>
                  <td>
                    {order.selectedAddress.name},{order.selectedAddress.city},
                    {order.selectedAddress.zip}
                  </td>
                  <td>
                    <select
                      value={order.status}
                      onChange={(e) => handleOrderStatus(e, order)}
                    >
                      <option value="pending">pending</option>
                      <option value="dispatched">dispatched</option>
                      <option value="delivered">delivered</option>
                      <option value="cancelled">cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </Container>
  );
};

export default AdminOrders;
