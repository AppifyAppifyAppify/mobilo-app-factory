import { Features } from "@/components/Features";
import { HeroSection } from "@/components/HeroSection";
import { LeadForm } from "@/components/LeadForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Features />
      <LeadForm />
    </div>
  );
};

export default Index;