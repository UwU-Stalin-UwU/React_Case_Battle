import "./PromoBlocks.css";

export default function PromoCard({ promo }) {
  return (
    <div className="promo-card">
      <h3>{promo.title}</h3>
      <p>{promo.text}</p>
      <button>Подробнее</button>
    </div>
  );
}
