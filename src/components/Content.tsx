import { ContentItemType } from "@/types/types";
import ContentCard from "./ContentCard";

const contentItems: ContentItemType[] = [
  {
    image: "/images/content-strategy.png",
    name: "Content Strategy",
    description:
      "All our content marketing service packages include a custom content strategy",
  },
  {
    image: "/images/content-development.png",
    name: "Content development",
    description:
      "We create some content calendar for your company’s must-share content",
  },
  {
    image: "/images/content-creation.png",
    name: "Content Creation",
    description:
      "Experienced in copywriting and marketing team begins creating content",
  },
  {
    image: "/images/content-optimization.png",
    name: "Content Optimization",
    description: "Your content marketing management services also include SEO",
  },
];

export default function Content() {
  return (
    <>
      <div className="gap-16 grid grid-cols-1 lg:grid-cols-5 px-8 md:px-16 lg:px-32 py-24">
        <div className="space-y-8 col-span-1 lg:col-span-2">
          <h2 className="font-semibold text-slate-700 text-2xl md:text-3xl lg:text-4xl">
            We’re Strategic Digital Marketing Agency
          </h2>
          <p className="text-slate-500 text-base md:text-lg">
            We’ve created a full-stack structure for our working workflow
            processe, were from the funny the century initial all made, have
            spare to negatives{" "}
          </p>
        </div>
        <div className="gap-10 grid grid-cols-2 col-span-1 lg:col-span-3">
          {contentItems.map((item, index) => (
            <ContentCard key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
