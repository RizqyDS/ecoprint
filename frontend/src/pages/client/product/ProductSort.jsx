import { useState } from "react";

function ProductSort({ products, setSortedProducts }) {
  const [sortOption, setSortOption] = useState("default");

  const handleSort = (value) => {
    setSortOption(value);

    const sorted = [...products];

    switch (value) {
      case "a-z":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "z-a":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;

      case "price-high-low":
        sorted.sort((a, b) => b.price - a.price);
        break;

      case "price-low-high":
        sorted.sort((a, b) => a.price - b.price);
        break;

      default:
        break;
    }

    setSortedProducts(sorted);
  };

  return (
    <select
      value={sortOption}
      onChange={(e) => handleSort(e.target.value)}
      className="py-2"
    >
      <option value="default">Relevance</option>
      <option value="a-z">A-Z</option>
      <option value="z-a">Z-A</option>
      <option value="price-high-low">High-Low</option>
      <option value="price-low-high">Low-High</option>
    </select>
  );
}

export default ProductSort;