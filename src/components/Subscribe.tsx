import ButtonPrimary from "./ui/button-primary";

export default function Subscribe() {
  return (
    <>
      <div className="relative px-8 md:px-16 lg:px-32 pt-0 pb-24">
        <div className="relative space-y-8 bg-gradient-to-br from-[#395C4D] to-[#132D1F] p-10 lg:p-32 w-full overflow-hidden">
          <img
            src="/images/hero-bg.png"
            alt="decorator"
            className="top-0 left-0 z-10 absolute w-full h-full object-cover"
          />
          <img
            src="/images/hero-corner-right.png"
            alt="decorator"
            className="-top-8 lg:-top-16 left-0 z-20 absolute h-36 lg:h-72 rotate-180"
          />
          <h2 className="font-semibold text-white text-2xl md:text-3xl lg:text-4xl">
            Subscribe to get information, latest news and other interesting
            offers about
          </h2>
          <div className="flex justify-start items-center gap-2">
            <img src="/images/logo.png" alt="logo" className="w-10" />
            <p className="font-semibold text-white text-2xl">markethink</p>
          </div>
          <div className="flex flex-wrap justify-start items-center gap-8 gap-y-4 p-0">
            <input
              type="text"
              className="block z-50 px-6 py-3 rounded-full"
              placeholder="Your Email"
            />
            <ButtonPrimary text="Get Started" />
          </div>
        </div>
        <img
          src="/images/corner-bottom.png"
          alt="decorator"
          className="-right-4 lg:right-8 bottom-8 z-20 absolute w-36 lg:w-72"
        />
      </div>
    </>
  );
}
