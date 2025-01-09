import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToLeadForm = () => {
    const leadForm = document.querySelector('#lead-form');
    leadForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative isolate overflow-hidden" dir="rtl">
      {/* Primary gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200 via-white to-purple-100 opacity-70" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(79, 70, 229, 0.1)'/%3E%3C/svg%3E")`
          }}
        />
      </div>
      
      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-heebo">
            המרת אתרי אינטרנט
            <span className="text-gradient"> לאפליקציות מובייל</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 font-heebo">
            פתרון מקצועי להמרת אתרי אינטרנט לאפליקציות מובייל מותאמות אישית. פיתוח מהיר, יעיל ואיכותי עבור לקוחותיכם.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button 
              className="gradient-bg text-white font-heebo" 
              size="lg"
              onClick={scrollToLeadForm}
            >
              התחל עכשיו <ArrowRight className="mr-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};