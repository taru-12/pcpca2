import React, { useContext } from "react";
import { OrderContext } from "../context/ordercontext";
import { Link } from "react-router-dom";

function Orders() {
  const { state, dispatch } = useContext(OrderContext);

  return (
    <div>
      <h1 data-testid="title">Orders</h1>

      {/* FILTER */}
      <select
        onChange={(e) =>
          dispatch({ type: "FILTER", payload: e.target.value })
        }
      >
        <option value="all">All</option>
        <option value="delivered">Delivered</option>
        <option value="pending">Pending</option>
      </select>

      {/* LIST */}
      {state.filtered.map((o) => (
        <div key={o.id} data-testid="order-item">
          <p>{o.item}</p>
          <p>{o.status}</p>
          <Link to={`/orders/${o.id}`}>View</Link>
        </div>
      ))}
    </div>
  );
}

export default Orders;