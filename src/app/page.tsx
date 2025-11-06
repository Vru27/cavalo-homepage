import SearchSection from "@/components/Search-section/search-section";
import Header from "../components/Header/header";
import Hero from "../components/Hero/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SearchSection />
    </main>
  );
}
