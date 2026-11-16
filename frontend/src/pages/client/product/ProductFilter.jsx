function ProductFilter({
  selectedProducts,
  setSelectedProducts,
  selectedMaterials,
  setSelectedMaterials,
  priceRange,
  setPriceRange,
}) {
  const productTypes = [
    { label: "Scarves", value: "scarves" },
    { label: "Bags & Accessories", value: "bags-accessories" },
    { label: "Home Textiles", value: "home-textiles" },
  ];

  const materials = [
    { label: "Silk", value: "silk" },
    { label: "Linen", value: "linen" },
    { label: "Organic Cotton", value: "organic-cotton" },
    { label: "Handmade Paper", value: "handmade-paper" },
  ];

  const handleCheckbox = (value, selected, setSelected) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <aside className="w-full md:w-64 shrink-0">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Filter</h2>

        <button
          type="button"
          onClick={() => {
            setSelectedProducts([]);
            setSelectedMaterials([]);
            setPriceRange({ min: 0, max: 100 });
          }}
          className="text-sm underline text-gray-500 cursor-pointer"
        >
          Clear All
        </button>
      </div>

      {/* PRODUCT FILTER */}
      <div className="border-b border-gray-300 pb-6 mb-6">
        <h3 className="font-semibold mb-4">Product</h3>

        <div className="flex flex-col gap-3">
          {productTypes.map((item) => (
            <label
              key={item.value}
              className="flex items-center gap-3 text-sm cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedProducts.includes(item.value)}
                onChange={() =>
                  handleCheckbox(
                    item.value,
                    selectedProducts,
                    setSelectedProducts,
                  )
                }
                className="w-4 h-4 accent-black"
              />

              {item.label}
            </label>
          ))}
        </div>
      </div>

      {/* MATERIAL FILTER */}
      <div className="border-b border-gray-300 pb-6 mb-6">
        <h3 className="font-semibold mb-4">Material</h3>

        <div className="flex flex-col gap-3">
          {materials.map((item) => (
            <label
              key={item.value}
              className="flex items-center gap-3 text-sm cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedMaterials.includes(item.value)}
                onChange={() =>
                  handleCheckbox(
                    item.value,
                    selectedMaterials,
                    setSelectedMaterials,
                  )
                }
                className="w-4 h-4 accent-black"
              />

              {item.label}
            </label>
          ))}
        </div>
      </div>

      {/* PRICE FILTER */}
      <div className="pb-6">
        <h3 className="font-semibold mb-5">Price Range</h3>

        <div className="flex justify-between text-sm mb-4">
          <span>${priceRange.min}</span>
          <span>${priceRange.max}</span>
        </div>

        <div className="relative h-6 flex items-center">
          {/* TRACK */}
          <div className="absolute w-full h-1 rounded-full bg-gray-300" />

          {/* ACTIVE TRACK */}
          <div
            className="absolute h-1 rounded-full bg-black"
            style={{
              left: `${(priceRange.min / 100) * 100}%`,
              right: `${100 - (priceRange.max / 100) * 100}%`,
            }}
          />

          {/* MINIMUM HANDLE */}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={priceRange.min}
            onChange={(e) =>
              setPriceRange({
                ...priceRange,
                min: Math.min(Number(e.target.value), priceRange.max),
              })
            }
            className="range-input"
          />

          {/* MAXIMUM HANDLE */}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={priceRange.max}
            onChange={(e) =>
              setPriceRange({
                ...priceRange,
                max: Math.max(Number(e.target.value), priceRange.min),
              })
            }
            className="range-input"
          />
        </div>

        <div className="flex justify-between text-xs text-gray-500 mt-3">
          <span>Min Price</span>
          <span>Max Price</span>
        </div>
      </div>
    </aside>
  );
}

export default ProductFilter;
