import ButtonPrimary from "./ui/button-primary";

export default function SocialMedia() {
  return (
    <>
      <div className="flex justify-between items-center gap-16 px-8 md:px-16 lg:px-32 pb-24">
        <div className="md:w-1/2">
          <img
            src="/images/social-media.png"
            alt="social media"
            className="w-full"
          />
        </div>
        <div className="space-y-8 md:w-1/2">
          <h2 className="font-semibold text-slate-700 text-2xl md:text-3xl lg:text-4xl">
            Increase Business on Social Media Reach
          </h2>
          <p className="text-slate-500 text-base md:text-lg">
            Using our network of industry influencers, we help promote your
            content
          </p>
          <ButtonPrimary text="Get Started" />
        </div>
      </div>
    </>
  );
}
