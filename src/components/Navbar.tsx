import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const scrollToLeadForm = () => {
    const leadForm = document.querySelector('#lead-form');
    leadForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="border-b" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-col items-center">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-auto"
                src="/lovable-uploads/7f135bf4-6221-4681-a42a-1b71c62d7d68.png"
                alt="Mobilo"
                width={48}
                height={48}
              />
            </div>
            <div className="mt-1">
              <span className="text-xl font-semibold text-gradient font-heebo">Mobilo</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
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
        </div>
      </div>
    </nav>
  );
};