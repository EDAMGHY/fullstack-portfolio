import { MainSection, Footer, Header } from "@/components/layout";

export default async function Home() {
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
