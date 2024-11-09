import { MainSection, Footer, Header } from "@/components/layout";
// import { getAllUsers } from "@/actions";

export default async function Home() {
  // const users = await getAllUsers();
  // console.log("users", users);
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
