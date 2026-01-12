import PromoCard from "./PromoCard";
import "./PromoBlocks.css";

export default function PromoBlocks() {
  const promos = [
    { id: 1, title: "Бонус за пополнение", text: "+10% к депозиту" },
    { id: 2, title: "Реферальная система", text: "Приглашай друзей" },
  ];

  return (
    <section className="promo-blocks">
      {promos.map((p) => (
        <PromoCard key={p.id} promo={p} />
      ))}
    </section>
  );
}
