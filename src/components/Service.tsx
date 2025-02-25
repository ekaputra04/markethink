const serviceItems: { title: string; icon: string }[] = [
  {
    title: "Update content on my Website",
    icon: "/images/triangle.png",
  },
  {
    title: "Improve User Experience",
    icon: "/images/cube.png",
  },
  {
    title: "Request Free Website Review",
    icon: "/images/wool-ball.png",
  },
  {
    title: "Improve your SEO Rankings",
    icon: "/images/square.png",
  },
];

export default function Service() {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-8 bg-green-50 px-8 md:px-16 lg:px-32 py-24">
        <h2 className="font-semibold text-slate-700 text-2xl md:text-3xl lg:text-4xl">
          How Can We Help You?
        </h2>
        <p className="text-slate-500 text-base md:text-lg">
          Let's do great work together
        </p>
        <div className="gap-16 grid grid-cols-2 lg:grid-cols-4">
          {serviceItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <div className="bg-white p-4 border border-green-200 rounded-full">
                <img src={item.icon} alt="shape" className="h-12" />
              </div>
              <p className="text-slate-700 text-sm md:text-base text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
