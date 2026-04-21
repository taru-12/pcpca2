import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { OrderContext } from "../context/OrderContextontext";

function OrderDetails() {
    const { id } = useParams();
    const { state } = useContext(OrderContext);

    const order = state.orders.find((o) => o.id === parseInt(id));

    if (!order) {
        return <p data-testid="invalid">Invalid Order</p>;
    }

    return (
        <div data-testid="order-details">
            <h2>{order.item}</h2>
            <p>₹{order.price}</p>
            <p>{order.status}</p>
        </div>
    );
}

export default OrderDetails;