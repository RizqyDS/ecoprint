function ProductSort({ sortOption, setSortOption }) {
  return (
    <select
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
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