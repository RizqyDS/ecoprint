import { useLocation, Link } from "react-router-dom";
import Topbar from "../../../components/Topbar";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function Checkout() {
  const location = useLocation();

  const { product, quantity } = location.state || {};

  if (!product) {
    return (
      <div className="container mx-auto py-20">
        <h1>Checkout data not found</h1>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  const total = product.price * quantity;

  return (
    <>
    <Topbar />
    <Navbar />
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold mb-8">
        Checkout
      </h1>

      <div className="flex gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-32 h-32 object-cover"
        />

        <div>
          <h2 className="font-semibold">{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>Quantity: {quantity}</p>
          <p>Total: ${total}</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}