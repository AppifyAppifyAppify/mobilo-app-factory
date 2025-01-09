import { Features } from "@/components/Features";
import { HeroSection } from "@/components/HeroSection";
import { LeadForm } from "@/components/LeadForm";
import { Navbar } from "@/components/Navbar";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Stats />
      <Features />
      <Testimonials />
      <LeadForm />
    </div>
  );
};

export default Index;