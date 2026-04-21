import React, { createContext, useReducer } from "react";

export const OrderContext = createContext();

const initialState = {
  orders: [],
  filtered: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ORDERS":
      return { ...state, orders: action.payload, filtered: action.payload };
    case "FILTER":
      return {
        ...state,
        filtered: state.orders.filter(
          (o) =>
            action.payload === "all" || o.status === action.payload
        ),
      };
    default:
      return state;
  }
};

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <OrderContext.Provider value={{ state, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};