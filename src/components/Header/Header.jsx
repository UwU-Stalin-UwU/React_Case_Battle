import "./Header.css";
import { Link } from "react-router-dom";
import { useBalance } from "../../hooks/useBalance";

export default function Header() {
  const balance = useBalance();

  return (
    <header className="header">
      <div className="logo">CASEBATTLE</div>

      <nav className="nav">
        <Link to="/cases">Кейсы</Link>
        <Link to="/upgrade">Апгрейд</Link>
        <Link to="/inventory">Инвентарь</Link>
        <Link to="/history">История</Link>
      </nav>

      <div className="right-side">
        <Link to="/clicker" className="earn-btn">Заработок</Link>
        <div className="balance">{balance} ₽</div>
      </div>
    </header>
  );
}
