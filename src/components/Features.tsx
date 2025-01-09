import { Code2, Smartphone, Zap } from "lucide-react";

const features = [
  {
    name: "הכנסה נוספת",
    description: "פתח ערוץ הכנסה חדש על ידי הצעת שירותי המרת אפליקציות ללקוחות קיימים וחדשים.",
    icon: Zap,
  },
  {
    name: "אינטגרציה מהירה",
    description: "שילוב קל ומהיר של השירות בפורטפוליו הקיים שלך, ללא השקעה בתשתיות או צוות נוסף.",
    icon: Code2,
  },
  {
    name: "צמיחה מיידית",
    description: "הרחב את היצע השירותים שלך והגדל את בסיס הלקוחות באמצעות פתרון מוכח.",
    icon: Smartphone,
  },
];

export const Features = () => {
  return (
    <div className="bg-white py-24 sm:py-32 font-heebo" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">הזדמנות עסקית</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            הגדל את ההכנסות שלך עם מינימום מאמץ
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            הצע ללקוחות שלך שירות חדשני של המרת אתרים לאפליקציות, ללא צורך בהשקעה בפיתוח או בתשתיות
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};