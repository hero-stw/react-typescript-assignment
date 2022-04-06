import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/client/Footer";
import Header from "./components/client/Header";
import ProductDetail from "./components/client/ProductDetail";
import ProductDetailAdmin from "./components/admin/ProductDetail";
import ProductList from "./components/client/ProductList";
import ProductForm from "./components/admin/ProductForm";
import "./index.css";
import Dashboard from "./pages/admin";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import HomePage from "./pages";
function App() {
  return (
    <div className="App">
      <Header transparent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/detail" element={<ProductDetail />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/form" element={<ProductForm />} />
        <Route path="/admin/detail" element={<ProductDetailAdmin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
