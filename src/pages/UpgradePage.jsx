import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Container from "../layout/Container";
import "./UpgradePage.css";

export default function UpgradePage() {
  return (
    <>
      <Header />

      <Container>
        <div className="upgrade-page">
          <h1>Апгрейд</h1>
          <p>Раздел находится в разработке.</p>
        </div>
      </Container>

      <Footer />
    </>
  );
}
