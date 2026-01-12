import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Container from "../layout/Container";
import { addBalance, getBalance } from "../utils/balance";
import { useState } from "react";
import "./ClickerPage.css";

export default function ClickerPage() {
  const [balance, setBalance] = useState(getBalance());

  const handleClick = () => {
    addBalance(10);
    setBalance(getBalance());
  };

  return (
    <>
      <Header />

      <Container>
        <div className="clicker-page">
          <h2>Заработок</h2>
          <p className="clicker-balance">Баланс: {balance} ₽</p>

          <button className="clicker-btn" onClick={handleClick}>
            Кликнуть (+10 ₽)
          </button>
        </div>
      </Container>

      <Footer />
    </>
  );
}
