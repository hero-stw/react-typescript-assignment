import { Routes, Route, Link } from "react-router-dom";

import ProductDetail from "./components/client/ProductDetail";
import ProductList from "./components/client/ProductList";
import ProductForm from "./components/admin/ProductForm";
import "./index.css";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import HomePage from "./pages";
import ClientLayout from "./containers/ClientLayout";
import AdminLayout from "./containers/AdminLayout";
import Product from "./pages/admin/products";
import Profile from "./pages/admin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetail />} />
        </Route>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Profile />} />
          <Route path="products" element={<Product />} />
          <Route path="create" element={<ProductForm />} />
          <Route path="edit/:id" element={<ProductForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
