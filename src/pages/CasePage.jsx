import { useParams } from "react-router-dom";
import { cases } from "../data/cases";
import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Container from "../layout/Container";
import { removeBalance } from "../utils/balance";
import "./CasePage.css";

export default function CasePage() {
  const { id } = useParams();
  const caseData = cases.find((c) => c.id === Number(id));

  const [drop, setDrop] = useState(null);
  const [error, setError] = useState("");
  const [isRolling, setIsRolling] = useState(false);
  const [rollItem, setRollItem] = useState(null);

  function openCase() {
    setError("");

    // Проверяем баланс
    if (!removeBalance(caseData.price)) {
      setError("Недостаточно средств!");
      return;
    }

    // Запускаем рулетку
    setIsRolling(true);
    setDrop(null);

    let counter = 0;
    const interval = setInterval(() => {
      const randomItem =
        caseData.items[Math.floor(Math.random() * caseData.items.length)];
      setRollItem(randomItem);
      counter++;

      if (counter > 20) {
        clearInterval(interval);

        // Выпадение по шансам
        const roll = Math.random() * 100;
        let sum = 0;

        for (const item of caseData.items) {
          sum += item.chance;
          if (roll <= sum) {
            setDrop(item);
            setIsRolling(false);

            // Сохраняем в инвентарь
            const inventory = JSON.parse(localStorage.getItem("inventory") || "[]");
            inventory.push({
              name: item.name,
              price: item.price,
              case: caseData.name,
              time: Date.now()
            });
            localStorage.setItem("inventory", JSON.stringify(inventory));

            // Сохраняем в историю
            const history = JSON.parse(localStorage.getItem("history") || "[]");
            history.unshift({
              name: item.name,
              price: item.price,
              case: caseData.name,
              time: Date.now()
            });
            localStorage.setItem("history", JSON.stringify(history));

            return;
          }
        }
      }
    }, 100);
  }

  return (
    <>
      <Header />

      <Container>
        <div className="case-page">
          <h1>{caseData.name}</h1>

          <img src={caseData.img} alt="" className="case-page-img" />

          <h2>Содержимое кейса</h2>

          <ul className="case-items">
            {caseData.items.map((item, i) => (
              <li key={i} className="case-item">
                <span>{item.name}</span>
                <span>{item.price} ₽</span>
                <span>{item.chance}%</span>
              </li>
            ))}
          </ul>

          <button className="open-case-btn" onClick={openCase}>
            Открыть кейс за {caseData.price} ₽
          </button>

          {error && <p className="error">{error}</p>}

          {isRolling && (
            <div className="roulette">
              <p>Крутится...</p>
              <div className="roulette-item">
                {rollItem?.name} — {rollItem?.price} ₽
              </div>
            </div>
          )}

          {drop && (
            <div className="drop-result">
              <h2>Выпало:</h2>
              <div className="drop-card">
                <span>{drop.name}</span>
                <span>{drop.price} ₽</span>
              </div>
            </div>
          )}
        </div>
      </Container>

      <Footer />
    </>
  );
}
