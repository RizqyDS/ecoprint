import { useParams, Link } from "react-router-dom";
import products from "../../../data/products";

import Topbar from "../../../components/Topbar";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function ProductDetail() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto py-20">
        <h1 className="text-2xl font-semibold">Product Not Found</h1>

        <Link to="/products" className="underline">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <>
    <Topbar />
    <Navbar />
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-2 gap-10">
        {/* PRODUCT IMAGE */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full object-cover"
          />
        </div>

        {/* PRODUCT INFORMATION */}
        <div>
          <p className="text-sm text-gray-500">HOME / SHOP / {product.name}</p>

          <h1 className="text-4xl font-semibold mt-5">{product.name}</h1>

          <p className="text-xl mt-4">$ {product.price}</p>

          <p className="mt-6">{product.description}</p>

          <p className="mt-4">Available Stock: {product.stock}</p>

          <button
            type="button"
            disabled={product.stock === 0}
            className="bg-black text-white px-8 py-3 mt-8 disabled:opacity-50"
          >
            {product.stock > 0 ? "Order Now" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

