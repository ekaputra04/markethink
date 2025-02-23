const clientsImages: string[] = [
  "/images/slack.png",
  "/images/amazon.png",
  "/images/logitech.png",
  "/images/google.png",
  "/images/facebook.png",
];

export default function Client() {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center gap-4 bg-green-50 px-8 md:px-16 lg:px-32 py-8 w-full">
        {clientsImages.map((image, index) => (
          <img src={image} alt="image" key={index} className="w-32" />
        ))}
      </div>
    </>
  );
}
