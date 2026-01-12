import { useState } from "react";
import Header from "../components/Header/Header";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import CaseCategories from "../components/CaseCategories/CaseCategories";
import CaseGrid from "../components/CaseGrid/CaseGrid";
import FeaturedCases from "../components/FeaturedCases/FeaturedCases";
import LiveDrops from "../components/LiveDrops/LiveDrops";
import PromoBlocks from "../components/PromoBlocks/PromoBlocks";
import Stats from "../components/Stats/Stats";
import Footer from "../components/Footer/Footer";
import Container from "../layout/Container";

export default function HomePage() {
  const [category, setCategory] = useState("all");

  return (
    <>
      <Header />
      <Container>
        <HeroBanner />
        <CaseCategories onSelect={setCategory} />
        <CaseGrid category={category} />
        <FeaturedCases />
        <LiveDrops />
        <PromoBlocks />
        <Stats />
      </Container>
      <Footer />
    </>
  );
}
