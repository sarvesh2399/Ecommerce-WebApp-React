import { Route, Routes } from "react-router";
import "./App.css";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "checkout" element = {<div><h1>Checkout Page</h1></div>} />
      </Routes>
      {/* <HomePage /> */}
    </>
  );
}

export default App;
