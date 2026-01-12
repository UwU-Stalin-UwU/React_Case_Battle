import { Link } from "react-router-dom";
import "./CaseGrid.css";

export default function CaseCard({ item }) {
  return (
    <div className="case-card">
      <img src={item.img} className="case-img"/>
      <h3>{item.name}</h3>

      <div className="case-bottom">
        <span>{item.price} ₽</span>
        <Link to={`/case/${item.id}`} className="case-open-btn">
          Открыть
        </Link>
      </div>
    </div>
  );
}
