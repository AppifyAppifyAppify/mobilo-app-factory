import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

export const LeadForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for your interest!",
      description: "We'll be in touch soon to discuss your needs.",
    });
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24">
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Start Converting Websites Today
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
          Join leading development agencies already using Mobilo
        </p>
        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-md space-y-6">
          <div>
            <Label htmlFor="company" className="text-white">Company Name</Label>
            <Input id="company" type="text" required className="mt-2" />
          </div>
          <div>
            <Label htmlFor="email" className="text-white">Work Email</Label>
            <Input id="email" type="email" required className="mt-2" />
          </div>
          <div>
            <Label htmlFor="website" className="text-white">Company Website</Label>
            <Input id="website" type="url" required className="mt-2" />
          </div>
          <div>
            <Label htmlFor="clients" className="text-white">Number of Active Clients</Label>
            <Input id="clients" type="number" required className="mt-2" />
          </div>
          <Button type="submit" className="w-full gradient-bg">
            Get Started
          </Button>
        </form>
      </div>
    </div>
  );
};