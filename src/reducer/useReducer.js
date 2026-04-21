export const orderReducer = (state, action) => {
  switch (action.type) {
    case "SET_ORDERS":
      return { ...state, orders: action.payload };

    case "FILTER":
      return {
        ...state,
        filtered: state.orders.filter(
          (o) => action.payload === "all" || o.status === action.payload
        ),
      };

    default:
      return state;
  }
};