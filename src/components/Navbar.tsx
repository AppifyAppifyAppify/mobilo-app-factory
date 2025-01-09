import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToLeadForm = () => {
    const leadForm = document.querySelector('#lead-form');
    leadForm?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="border-b" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src="/lovable-uploads/239f04b7-4f3e-4063-8091-b32902aa7f4a.png"
                alt="Applify"
                width={32}
                height={32}
              />
            </div>
            <div>
              <span className="text-xl font-semibold text-gray-900 font-heebo">Applify</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="font-heebo"
              onClick={scrollToLeadForm}
            >
              יצירת קשר
            </Button>
            <Button 
              className="gradient-bg text-white font-heebo"
              onClick={scrollToLeadForm}
            >
              התחל עכשיו
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-10 w-10 p-0"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Button 
              variant="ghost" 
              className="w-full font-heebo justify-start"
              onClick={scrollToLeadForm}
            >
              יצירת קשר
            </Button>
            <Button 
              className="w-full gradient-bg text-white font-heebo justify-start"
              onClick={scrollToLeadForm}
            >
              התחל עכשיו
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};