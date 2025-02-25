import { ArticleItemType } from "@/types/types";
import ArticleCard from "./ArticleCard";

const articleCategories: { title: string; isActive: boolean }[] = [
  {
    title: "Content Writing",
    isActive: true,
  },
  {
    title: "Content Marketing",
    isActive: false,
  },
];

const articleItems: ArticleItemType[] = [
  {
    title: "10 Reasons to Invest in SEO Copywriting Services",
    image: "/images/article-1.png",
    content:
      "SEO copywriting services help businesses improve search rankings, attract more visitors, and enhance brand credibility. In this article, we explore ten compelling reasons why investing in SEO copywriting is essential for business growth.",
    publishedDate: new Date("2021-08-17"),
  },
  {
    title: "How to Get Hired at a Top Digital Marketing Agency",
    image: "/images/article-2.png",
    content:
      "Agency life. We’ve all seen the photos posted on social media – the cool office spaces, the team bonding activities, and the high-energy work culture. But what does it take to land a job at a top digital marketing agency? We break down the essential skills and strategies to help you secure your dream role.",
    publishedDate: new Date("2021-08-17"),
  },
  {
    title: "Copywriting Guidelines During the Coronavirus Pandemic",
    image: "/images/article-3.png",
    content:
      "Since the coronavirus hit earlier this year, it’s hard to go anywhere without seeing its impact. Businesses have had to adapt their messaging and tone carefully. In this guide, we provide essential copywriting tips to help brands communicate effectively and empathetically during uncertain times.",
    publishedDate: new Date("2021-08-17"),
  },
];

export default function Article() {
  return (
    <div className="grid-cols-1 px-8 md:px-16 lg:px-32 py-24">
      <div className="flex flex-wrap justify-between items-end gap-8">
        <h2 className="font-semibold text-slate-700 text-xl md:text-2xl lg:text-3xl">
          Read More Articles From Our Blog
        </h2>
        <ul className="flex justify-between items-center gap-8">
          {articleCategories.map((category, index) => (
            <li
              key={index}
              className={`pb-2 ${
                category.isActive ? "border-green-400 border-b-2" : ""
              }`}
            >
              <p className="font-semibold text-slate-600">{category.title}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="gap-8 grid md:grid-cols-2 mt-8">
        <div className="col-span-1">
          <ArticleCard article={articleItems[0]} isFirst />
        </div>
        <div className="gap-8 grid grid-cols-2 col-span-1">
          {articleItems.slice(1).map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
