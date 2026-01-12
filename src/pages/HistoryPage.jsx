import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Container from "../layout/Container";
import "./HistoryPage.css";

export default function HistoryPage() {
  const history = JSON.parse(localStorage.getItem("history") || "[]");

  return (
    <>
      <Header />

      <Container>
        <div className="history-page">
          <h2>История выпадений</h2>

          {history.length === 0 ? (
            <p>Пока ничего не выпадало</p>
          ) : (
            <ul>
              {history.map((item, i) => (
                <li key={i} className="history-item">
                  <div>
                    <strong>{item.name}</strong> — {item.price} ₽
                    <span className="history-case">из кейса: {item.case}</span>
                  </div>
                  <span className="history-time">
                    {new Date(item.time).toLocaleString()}
                  </span>
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
