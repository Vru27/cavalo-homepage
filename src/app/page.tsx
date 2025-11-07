import SearchSection from "@/components/Search-section/search-section";
import VehicleType from "@/components/Vehicle-type/vehicle-type";
import FindTrucks from "@/components/Find-trucks/find-trucks";
import { BestSellingSection } from "@/components/Best-selling/best-selling-section";
import Brands from "@/components/Brands/brands";
import CompareVehicle from "@/components/Compare-vehicle/compare-vehicle";
import { WhyChooseUs } from "@/components/Why-choose-us/why-choose-us";
import VehicleTypesSection from "@/components/Vehicle-category/vehicle-category";
import TestimonialsSection from "@/components/Testimonials/customer-testimonials";
import Header from "@/components/Header/header";
import Hero from "@/components/Hero/hero";
import { LatestBlog } from "@/components/Latest-blog/latest-blog";
import FAQsSection from "@/components/FAQs/faqs";
import Footer from "@/components/Footer/footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SearchSection />
      <VehicleType/>
      <FindTrucks/>
      <BestSellingSection/>
      <Brands/>
      <CompareVehicle/>
      <WhyChooseUs/>
      <VehicleTypesSection/>
      <TestimonialsSection/>
      <LatestBlog/>
      <FAQsSection/>
      <Footer/>
    </main>
  );
}
