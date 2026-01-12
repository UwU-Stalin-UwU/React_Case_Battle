import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CasePage from "./pages/CasePage";
import UpgradePage from "./pages/UpgradePage";
import ClickerPage from "./pages/ClickerPage";
import InventoryPage from "./pages/InventoryPage";
import HistoryPage from "./pages/HistoryPage";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Главная */}
        <Route path="/" element={<HomePage />} />

        {/* Кейсы */}
        <Route path="/cases" element={<HomePage />} />
        <Route path="/case/:id" element={<CasePage />} />

        {/* Апгрейд */}
        <Route path="/upgrade" element={<UpgradePage />} />

        {/* Заработок */}
        <Route path="/clicker" element={<ClickerPage />} />

        {/* Инвентарь */}
        <Route path="/inventory" element={<InventoryPage />} />

        {/* История выпадений */}
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </Router>
  );
}
