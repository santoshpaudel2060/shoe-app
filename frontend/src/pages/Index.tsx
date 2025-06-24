import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
// import FeaturedProducts from "../components/FeaturedProducts";
import BenefitsSection from "../components/BenefitsSection";
// import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        {/* <FeaturedProducts /> */}
        <BenefitsSection />
        {/* <TestimonialsSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
