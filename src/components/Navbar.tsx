import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const scrollToLeadForm = () => {
    const leadForm = document.querySelector('#lead-form');
    leadForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="border-b" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-auto"
                src="/lovable-uploads/7f135bf4-6221-4681-a42a-1b71c62d7d68.png"
                alt="Mobilo"
                width={40}
                height={40}
              />
            </div>
            <div>
              <span className="text-xl font-semibold text-gray-900 font-heebo">Mobilo</span>
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