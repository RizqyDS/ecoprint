function ProductTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { label: "All Pieces", value: "all" },
    { label: "Wear & Carry", value: "wear" },
    { label: "Home & Living", value: "home" },
    { label: "Gift Card", value: "gift" },
  ];

  return (
    <div className="flex gap-6">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          type="button"
          onClick={() => setActiveTab(tab.value)}
          className={`pb-3 whitespace-nowrap transition-colors ${
            activeTab === tab.value
              ? "border-b-2 border-black text-secondary font-semibold"
              : "text-secondary hover:text-background"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default ProductTabs;