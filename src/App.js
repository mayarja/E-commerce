import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import PageSingleProduct from "./pages/PageSingleProduct";
import ProductList from "./pages/ProductList";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/E-commerce/" element={<Home />} />
          <Route path="/E-commerce/ProductList" element={<ProductList />} />
          <Route
            path="/E-commerce/PageSingleProduct"
            element={<PageSingleProduct />}
          />
          <Route path="/E-commerce/RegisterPage" element={<RegisterPage />} />
          <Route path="/E-commerce/LoginPage" element={<LoginPage />} />
          <Route path="/E-commerce/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
