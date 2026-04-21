import React, { useContext } from "react";
import { OrderContext } from "../context/OrderContextontext";
import { Link } from "react-router-dom";

function Orders() {
  const { state, dispatch } = useContext(OrderContext);

  // 🔥 fallback safety
  const orders = state?.filtered || [];

  return (
    <div>
      <h1 data-testid="title">Orders</h1>

      {/* FILTER */}
      <select
        data-testid="filter"
        onChange={(e) =>
          dispatch({ type: "FILTER", payload: e.target.value })
        }
      >
        <option value="all">All</option>
        <option value="delivered">Delivered</option>
        <option value="pending">Pending</option>
      </select>

      {/* EMPTY STATE */}
      {orders.length === 0 && (
        <p data-testid="empty">No Orders Available</p>
      )}

      {/* LIST */}
      {orders.map((o) => (
        <div key={o.id} data-testid="order-item">
          <p data-testid="item">{o.item}</p>
          <p data-testid="status">{o.status}</p>

          <Link to={`/orders/${o.id}`} data-testid="view-link">
            View
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Orders;