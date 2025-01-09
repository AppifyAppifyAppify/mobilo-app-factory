import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-sans">
            Transform Websites into
            <span className="text-gradient"> Native Apps</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Help your clients reach mobile users with native apps. Convert any website into a mobile app in minutes, not months.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button className="gradient-bg text-white" size="lg">
              Start Converting <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};