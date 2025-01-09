import { Code2, Smartphone, Zap } from "lucide-react";

const features = [
  {
    name: "ביצועים מקצועיים",
    description: "אפליקציות native אמיתיות עם ביצועים אופטימליים ותכונות מכשיר מקוריות.",
    icon: Zap,
  },
  {
    name: "שליטה מלאה בקוד",
    description: "גישה מלאה לקוד המקור המותאם אישית לצרכי הלקוח.",
    icon: Code2,
  },
  {
    name: "פלטפורמות מרובות",
    description: "פיתוח אפליקציות iOS ו-Android מאתר אינטרנט יחיד.",
    icon: Smartphone,
  },
];

export const Features = () => {
  return (
    <div className="bg-white py-24 sm:py-32 font-heebo" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">פיתוח מקצועי</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            כל מה שצריך כדי להגדיל את העסק שלכם
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