export const Stats = () => {
  const stats = [
    { id: 1, name: 'אפליקציות הושקו', value: '500+' },
    { id: 2, name: 'לקוחות מרוצים', value: '300+' },
    { id: 3, name: 'זמן המרה ממוצע', value: '48 שעות' },
    { id: 4, name: 'חיסכון בעלויות', value: '70%' },
  ];

  return (
    <div className="bg-white py-24 sm:py-32" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              מובילים בתעשייה עם תוצאות מוכחות
            </h2>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-indigo-600">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};