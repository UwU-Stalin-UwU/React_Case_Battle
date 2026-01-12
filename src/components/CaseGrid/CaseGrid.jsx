import { cases } from "../../data/cases";
import CaseCard from "./CaseCard";
import "./CaseGrid.css";

export default function CaseGrid({ category }) {
  const filtered =
    category === "all"
      ? cases
      : cases.filter((c) => c.category === category);

  return (
    <div className="case-grid">
      {filtered.map((c) => (
        <CaseCard key={c.id} item={c} />
      ))}
    </div>
  );
}
