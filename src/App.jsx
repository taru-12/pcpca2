import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OrderProvider } from "./context/OrderContext";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import Stats from "./pages/stats";

function App() {
  return (
    <OrderProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Orders />} />
          <Route path="/orders/:id" element={<OrderDetails />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </BrowserRouter>
    </OrderProvider>
  );
}

export default App;