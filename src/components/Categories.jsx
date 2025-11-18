const categories = [
  { id: "all", label: "All" },
  { id: "business", label: "Business" },
  { id: "self-help", label: "Self-Help" },
  { id: "productivity", label: "Productivity" },
  { id: "tech", label: "Tech / Coding" },
];

export default function Categories({ selected, onSelect }) {
  return (
    <section id="categories" className="section">
      <div className="container">
        <h2 className="section__title">
          Shop by <span className="purple">Category</span>
        </h2>
        <div className="categories">
          {categories.map((c) => (
            <button
              key={c.id}
              className={`chip ${selected === c.id ? "active" : ""}`}
              onClick={() => onSelect(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
