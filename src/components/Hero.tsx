import ButtonPrimary from "./ui/button-primary";

export default function Hero() {
  return (
    <div className="relative flex justify-center items-center bg-gradient-to-b from-[#395C4D] to-[#132D1F] w-full h-screen">
      <div className="z-20 flex flex-col justify-center items-center">
        <div className="flex items-center gap-8">
          <img
            src="/images/vector-horizontal.png"
            alt="vector"
            className="w-16"
          />
          <p className="font-semibold text-white/75 text-3xl">The Best</p>
          <img
            src="/images/vector-horizontal.png"
            alt="vector"
            className="w-16"
          />
        </div>
        <h1 className="mt-6 font-bold text-white text-7xl">
          Digital Marketing
        </h1>
        <p className="mt-12 lg:px-96 text-white text-white/50 text-lg text-center text-wrap">
          Completely synergize resource taxing relationships via premier niche
          markets. Professionally cultivate one-to-one customer
        </p>
        <ButtonPrimary text="Get Started" />
      </div>
      <img
        src="/images/hero-bg.png"
        alt="decorator"
        className="top-0 left-0 absolute w-screen h-screen object-cover"
      />
      <img
        src="/images/hero-bottom.png"
        alt="decorator"
        className="right-0 bottom-0 left-0 absolute"
      />
      <img
        src="/images/hero-corner-left.png"
        alt="decorator"
        className="bottom-0 left-0 absolute h-80"
      />
      <img
        src="/images/hero-corner-right.png"
        alt="decorator"
        className="right-0 bottom-0 absolute h-40"
      />
    </div>
  );
}
