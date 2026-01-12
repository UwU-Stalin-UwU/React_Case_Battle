import DropItem from "./DropItem";
import "./LiveDrops.css";

export default function LiveDrops() {
  const drops = [
    { id: 1, user: "Officer Nate Higgerson", item: "AK-47 Redline", price: 1200 },
    { id: 2, user: "Joker", item: "AWP Asiimov", price: 3400 },
    { id: 3, user: "Operator Tarifa", item: "USP Kill Confirmed", price: 900 },
  ];

  return (
    <section className="live-drops">
      <div className="drops-track">
        {drops.map((d) => (
          <DropItem key={d.id} drop={d} />
        ))}
      </div>
    </section>
  );
}
