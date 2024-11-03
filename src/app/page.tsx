import { MainSection } from "@/components/MainSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <hr />
      <MainSection />
      <hr />
      <Footer />
    </main>
  );
}
