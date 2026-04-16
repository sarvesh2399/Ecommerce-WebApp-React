import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { CheckoutPage } from "./pages/CheckoutPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "checkout" element = {<CheckoutPage />} />
        <Route path = "orders" element = {<div>Orders</div>} />
        <Route path = "tracking" element = {<div>tracking</div> } />
      </Routes>
    </>
  );
}

export default App;
