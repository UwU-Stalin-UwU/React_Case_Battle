import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Container from "../layout/Container";
import { addBalance } from "../utils/balance";
import "./InventoryPage.css";
import { useState } from "react";

export default function InventoryPage() {
  const [inventory, setInventory] = useState(
    JSON.parse(localStorage.getItem("inventory") || "[]")
  );

  function sellItem(index) {
    const item = inventory[index];

    // Начисляем деньги за продажу
    addBalance(item.price);

    // Удаляем предмет из инвентаря
    const updated = inventory.filter((_, i) => i !== index);
    setInventory(updated);
    localStorage.setItem("inventory", JSON.stringify(updated));
  }

  return (
    <>
      <Header />

      <Container>
        <div className="inventory-page">
          <h2>Инвентарь</h2>

          {inventory.length === 0 ? (
            <p>У вас пока нет предметов</p>
          ) : (
            <ul>
              {inventory.map((item, i) => (
                <li key={i} className="inv-item">
                  <div>
                    <strong>{item.name}</strong> — {item.price} ₽
                    <span className="inv-case"> из кейса: {item.case}</span>
                  </div>
                  <button onClick={() => sellItem(i)}>Продать</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>

      <Footer />
    </>
  );
}
