import React, { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

function Stats() {
  const { state } = useContext(OrderContext);

  const total = state?.orders?.length || 0;
  const revenue =
    state?.orders?.reduce((sum, o) => sum + o.price, 0) || 0;

  return (
    <div>
      <h1>Stats</h1>
      <p>Total Orders: {total}</p>
      <p>Total Revenue: ₹{revenue}</p>
    </div>
  );
}

export default Stats;