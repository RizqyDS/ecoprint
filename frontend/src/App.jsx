import { Routes, Route } from "react-router-dom";

// Client Pages
import Home from "./pages/client/Home";
import Products from "./pages/client/product/Products";
import Journal from "./pages/client/Journal";
import Story from "./pages/client/Story";
import Process from "./pages/client/Process";

// Admin Pages
import Dashboard from "./pages/admin/Dashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminOrder from "./pages/admin/AdminOrder";

function App() {
  return (
    <Routes>
      {/* Client Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/story" element={<Story />} />
      <Route path="/process" element={<Process />} />

      {/* Admin Routes */}
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/products" element={<AdminProducts />} />
      <Route path="/admin/orders" element={<AdminOrder />} />
    </Routes>
  );
}

export default App;
