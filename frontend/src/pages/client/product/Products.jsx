import Topbar from "../../../components/Topbar";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { useState } from "react";
import ProductSort from "./ProductSort";

export default function Products() {
  const category = [
    "All Pieces",
    "Wear & carry",
    "Home & living",
    "Gift cards",
  ];

  const products = [
    {
      id: 1,
      image: "./src/assets/products/product-1.png",
      name: "Eucalyptus Silk Scarf",
      price: 25,
    },
    {
      id: 2,
      image: "./src/assets/products/product-2.png",
      name: "Fern Everyday Tote",
      price: 42,
    },
    { id: 3, 
      image: "./src/assets/products/product-3.png",
      name: "Botanical Table Runner", 
      price: 51 
    },
    {
      id: 4,
      image: "./src/assets/products/product-4.png",
      name: "Eucalyptus Silk Scarf",
      price: 25,
    },
    {
      id: 5,
      image: "./src/assets/products/product-5.png",
      name: "Fern Everyday Tote",
      price: 42,
    },
    { id: 6, 
      image: "./src/assets/products/product-6.png",
      name: "Botanical Table Runner", 
      price: 51 
    },
  ];

  const [active, setActive] = useState("All Pieces");
  const [sortedProducts, setSortedProducts] = useState(products);

  return (
    <>
      <Topbar />
      <Navbar />
      <section className="bg-support" label="products">
        <div className="container mx-auto ">
          <div className="flex items-center justify-between gap-5">
            <div className="flex flex-col gap-3">
              <p className="text-sm">HOME / SHOP</p>
              <h1 className="text-7xl font-primary w-150 mt-5">
                Naturally one of a kind.
              </h1>
              <p className="w-150 mt-5">
                Botanical pieces for your wardrobe, your home, your everyday.
                Printed with real leaves. Made to be loved for years.
              </p>
            </div>
            <img
              src="./src/assets/product.png"
              alt="product"
              className="w-180 h-100"
            />
          </div>
        </div>
      </section>
      <section className="bg-primary py-10">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-10">
              {category.map((category) => (
                <button
                  key={category}
                  onClick={() => setActive(category)}
                  className={
                    active === category
                      ? " text-secondary hover:text-secondary font-semibold underline underline-offset-8"
                      : " text-secondary font-medium cursor-pointer"
                  }
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex items-center">
              <h1>Sort By :</h1>
              <ProductSort
                products={products}
                setSortedProducts={setSortedProducts}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 mt-5">
            {sortedProducts.map((product) => (
              <div key={product.id}>
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>$ {product.price.toLocaleString("id-ID")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
