import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Topbar from "../../../components/Topbar";

import products from "../../../data/products";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((item) => item.id === Number(id));

  const [selectedImage, setSelectedImage] = useState(null);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Menggabungkan ketiga gambar produk
  const images = product
    ? [product.image, product.image2, product.image3].filter(Boolean)
    : [];

  const mainImage = selectedImage || product?.image;

  // Jika produk tidak ditemukan
  if (!product) {
    return (
      <div className="container mx-auto py-20">
        <h1 className="text-2xl font-semibold">Product Not Found</h1>

        <Link to="/products" className="underline mt-4 inline-block">
          Back to Products
        </Link>
      </div>
    );
  }

  // Label kategori
  const categoryLabels = {
    wear: "Wear & Carry",
    home: "Home & Living",
    gift: "Gift Card",
  };

  // Quantity
  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => Math.min(product.stock, prev + 1));
  };

  // Order dan menuju checkout
  const handleOrder = () => {
    navigate("/checkout", {
      state: {
        product: product,
        quantity: quantity,
      },
    });
  };

  return (
    <>
      <Topbar />
      <Navbar />

      <section className="bg-primary py-12">
        <div className="container mx-auto px-4">
          {/* BREADCRUMB */}
          <p className="text-sm text-gray-500 mb-8">
            <Link to="/">HOME</Link> / <Link to="/products">SHOP</Link> /{" "}
            {product.name}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* PRODUCT IMAGES */}
            <div>
              {/* MAIN IMAGE */}
              <div className="overflow-hidden bg-white">
                <img
                  src={mainImage}
                  alt={product.name}
                  onClick={() => setIsZoomOpen(true)}
                  className="w-full h-125 object-cover cursor-pointer"
                />
              </div>

              {/* IMAGE THUMBNAILS */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    className={`overflow-hidden border-2 ${
                      mainImage === image
                        ? "border-transparent"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-32 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* PRODUCT INFORMATION */}
            <div className="flex flex-col gap-5">
              <p className="text-sm uppercase">
                {categoryLabels[product.category]} / {product.material} / {product.productType}
              </p>

              <h1 className="text-4xl font-primary mt-3">{product.name}</h1>

              <p className="text-2xl mt-5">
                $ {product.price.toLocaleString("id-ID")}
              </p>

              <div className="border-t border-gray-300 my-6" />

              <h2 className="font-semibold mb-3">Product Description</h2>

              <p className="text-gray-600 leading-7">{product.description}</p>

              <div className="mt-6">
                <p className="text-sm">Available Stock: {product.stock}</p>
              </div>

              {/* QUANTITY */}
              <div className="mt-8">
                <h3 className="font-semibold mb-3">Quantity</h3>

                <div className="flex place-items-center gap-4">
                  <div className="flex items-center border border-gray-400">
                    <button
                      type="button"
                      onClick={decreaseQuantity}
                      disabled={quantity <= 1}
                      className="px-5 py-3 hover:bg-gray-100 disabled:opacity-40"
                    >
                      -
                    </button>

                    <span className="px-5 py-3 min-w-14 text-center">
                      {quantity}
                    </span>

                    <button
                      type="button"
                      onClick={increaseQuantity}
                      disabled={quantity >= product.stock}
                      className="px-5 py-3 hover:bg-gray-100 disabled:opacity-40"
                    >
                      +
                    </button>
                  </div>

                  {/* ORDER BUTTON */}
                  <button
                    type="button"
                    onClick={handleOrder}
                    disabled={product.stock <= 0}
                    className="w-full bg-black border border-black text-white py-3 hover:bg-gray-800 transition disabled:opacity-50"
                  >
                    {product.stock > 0 ? "Order Now" : "Out of Stock"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE ZOOM / LIGHTBOX */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setIsZoomOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsZoomOpen(false)}
            className="absolute top-6 right-8 text-white text-4xl cursor-pointer"
            aria-label="Close image preview"
          >
            &times;
          </button>

          <img
            src={mainImage}
            alt={product.name}
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </>
  );
}
