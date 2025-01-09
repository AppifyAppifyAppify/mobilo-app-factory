export const Testimonials = () => {
  const testimonials = [
    {
      content: "המערכת של Mobilo חסכה לנו זמן רב בפיתוח אפליקציות. התוצאות מדהימות!",
      author: "יעל כהן",
      role: "מנהלת פיתוח, TechSolutions",
    },
    {
      content: "השירות המקצועי והתמיכה המעולה עזרו לנו להשיק את האפליקציה בזמן שיא.",
      author: "דוד לוי",
      role: "מייסד, StartApp",
    },
    {
      content: "הפתרון המושלם עבור חברות שרוצות להיכנס לעולם האפליקציות במהירות וביעילות.",
      author: "מיכל ברק",
      role: "סמנכ״לית שיווק, WebPro",
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">המלצות</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            לקוחות מספרים על Mobilo
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                <p className="text-gray-900">{testimonial.content}</p>
                <div className="mt-6 flex items-center gap-x-4">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};