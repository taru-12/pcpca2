import React, { createContext, useReducer, useEffect } from "react";
import { orderReducer } from "../reducer/orderReducer";

export const OrderContext = createContext();

const initialState = {
  orders: [],
  filtered: [],
};

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  useEffect(() => {
    const data = [
      { id: 1, item: "Pizza", price: 200, status: "delivered" },
      { id: 2, item: "Burger", price: 150, status: "pending" },
      { id: 3, item: "Pasta", price: 180, status: "delivered" },
    ];

    dispatch({ type: "SET_ORDERS", payload: data });
    dispatch({ type: "FILTER", payload: "all" });
  }, []);

  return (
    <OrderContext.Provider value={{ state, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};