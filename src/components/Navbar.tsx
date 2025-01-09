import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="border-b" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* Logo placeholder - replace src with actual logo when available */}
              <img
                className="h-8 w-auto"
                src="/placeholder.svg"
                alt="Mobilo"
                width={32}
                height={32}
              />
            </div>
            <div className="ml-4">
              <span className="text-2xl font-bold text-gradient font-heebo">Mobilo</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="font-heebo">
              יצירת קשר
            </Button>
            <Button className="gradient-bg text-white font-heebo">
              התחל עכשיו
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};