import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-white" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-heebo">
            המרת אתרי אינטרנט
            <span className="text-gradient"> לאפליקציות מובייל</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 font-heebo">
            פתרון מקצועי להמרת אתרי אינטרנט לאפליקציות מובייל מותאמות אישית. פיתוח מהיר, יעיל ואיכותי עבור לקוחותיכם.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button className="gradient-bg text-white font-heebo" size="lg">
              התחל עכשיו <ArrowRight className="mr-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};