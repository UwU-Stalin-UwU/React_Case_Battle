import "./Stats.css";

export default function Stats() {
  const stats = [
    { label: "Пользователей", value: 12450 },
    { label: "Открыто кейсов", value: 982341 },
    { label: "Выдано призов", value: "12 400 000 ₽" },
  ];

  return (
    <section className="stats">
      {stats.map((s) => (
        <div key={s.label} className="stat-item">
          <div className="stat-value">{s.value}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </section>
  );
}
