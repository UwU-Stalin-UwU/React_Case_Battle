import { cases } from "../../data/cases";
import "./FeaturedCases.css";

export default function FeaturedCases() {
  const randomThree = [...cases]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <section className="featured-cases">
      <h2>Лучшие кейсы дня</h2>
      <div className="featured-list">
        {randomThree.map((f) => (
          <div key={f.id} className="featured-card">
            <img src={f.img} className="featured-img" alt={f.name} />
            <h3>{f.name}</h3>
            <p>{f.price} ₽</p>
            <button>Открыть</button>
          </div>
        ))}
      </div>
    </section>
  );
}
