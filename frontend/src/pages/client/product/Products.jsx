import Topbar from "../../../components/Topbar";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { useState } from "react";

import ProductSort from "./ProductSort";
import ProductTabs from "./ProductTabs";
import ProductFilter from "./ProductFilter";

import products from "../../../data/products";

import { Link } from "react-router-dom";

export default function Products() {
  // MAIN TAB
  const [activeTab, setActiveTab] = useState("all");

  // SORTING
  const [sortOption, setSortOption] = useState("default");

  // PRODUCT FILTER
  const [selectedProducts, setSelectedProducts] = useState([]);

  // MATERIAL FILTER
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  // PRICE FILTER
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 100,
  });

  // FILTER PRODUCTS
  const filteredProducts = products.filter((product) => {
    const matchTab = activeTab === "all" || product.category === activeTab;

    const matchProduct =
      selectedProducts.length === 0 ||
      selectedProducts.includes(product.productType);

    const matchMaterial =
      selectedMaterials.length === 0 ||
      selectedMaterials.includes(product.material);

    const matchPrice =
      product.price >= priceRange.min && product.price <= priceRange.max;

    return matchTab && matchProduct && matchMaterial && matchPrice;
  });

  // SORT PRODUCTS
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "a-z":
        return a.name.localeCompare(b.name);

      case "z-a":
        return b.name.localeCompare(a.name);

      case "price-high-low":
        return b.price - a.price;

      case "price-low-high":
        return a.price - b.price;

      default:
        return 0;
    }
  });

  return (
    <>
      <Topbar />
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-support" label="products">
        <div className="container mx-auto">
          <div className="flex items-center justify-between gap-5">
            <div className="flex flex-col gap-3">
              <p className="text-sm">HOME / SHOP</p>

              <h1 className="text-7xl font-primary text-secondary w-150 mt-5">
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

      {/* PRODUCT SECTION */}
      <section className="bg-primary py-10">
        <div className="container mx-auto">
          {/* TABS */}
          <div className="flex justify-between items-center mb-8">
            <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="flex items-center gap-2">
              <label htmlFor="product-sort">Sort By:</label>

              <ProductSort
                sortOption={sortOption}
                setSortOption={setSortOption}
              />
            </div>
          </div>

          {/* FILTER + PRODUCT LIST */}
          <div className="flex flex-col md:flex-row gap-10">
            {/* LEFT SIDEBAR */}
            <ProductFilter
              selectedProducts={selectedProducts}
              setSelectedProducts={setSelectedProducts}
              selectedMaterials={selectedMaterials}
              setSelectedMaterials={setSelectedMaterials}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />

            {/* RIGHT PRODUCT LIST */}
            <div className="flex-1 min-w-0">
              {/* SORTING */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-gray-500">
                  Showing {sortedProducts.length} products
                </p>
              </div>

              {/* PRODUCT GRID */}
              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                  {sortedProducts.map((product) => (
                    <div key={product.id}>
                      <Link to={`/products/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full object-cover"
                        />

                        <h2 className="mt-3 font-medium">{product.name}</h2>
                      </Link>
                      
                      <p className="mt-1">
                        $ {product.price.toLocaleString("id-ID")}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center">
                  <h2 className="text-xl font-semibold">No products found</h2>

                  <p className="text-gray-500 mt-2">
                    Try changing your filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
