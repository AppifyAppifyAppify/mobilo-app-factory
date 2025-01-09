import { Features } from "@/components/Features";
import { HeroSection } from "@/components/HeroSection";
import { LeadForm } from "@/components/LeadForm";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Features />
      <LeadForm />
    </div>
  );
};

export default Index;