import "./LiveDrops.css";

export default function DropItem({ drop }) {
  return (
    <div className="drop-item">
      <span className="drop-user">{drop.user}</span>
      выбил
      <span className="drop-item-name">{drop.item}</span>
      <span className="drop-price">{drop.price} ₽</span>
    </div>
  );
}
