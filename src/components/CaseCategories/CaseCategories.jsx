import "./CaseCategories.css";

export default function CaseCategories({ onSelect }) {
  const categories = [
    { id: "all", label: "Все" },
    { id: "popular", label: "Популярные" },
    { id: "new", label: "Новые" },
    { id: "cheap", label: "Дешёвые" },
    { id: "expensive", label: "Дорогие" },
    { id: "covert", label: "Covert" },
    { id: "knife", label: "Ножевые" }
  ];

  return (
    <div className="case-categories">
      {categories.map((c) => (
        <button key={c.id} className="category-btn" onClick={() => onSelect(c.id)}>
          {c.label}
        </button>
      ))}
    </div>
  );
}
