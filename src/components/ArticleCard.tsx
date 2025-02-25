import { ArticleItemType } from "@/types/types";
import { Button } from "./ui/button";
import { formatDate } from "@/utilities/utilities";
import { Eye } from "lucide-react";

interface ArticleCardProps {
  article: ArticleItemType;
  isFirst?: boolean;
}

export default function ArticleCard({
  article,
  isFirst = false,
}: ArticleCardProps) {
  return (
    <>
      <div className="space-y-4">
        <img
          src={article.image}
          alt="image"
          className={`w-full object-cover ${
            isFirst ? "aspect-[3/2]" : "aspect-square"
          }`}
        />
        <p className="text-slate-500 uppercase">
          {formatDate(article.publishedDate)}
        </p>
        <h3 className="font-semibold text-slate-700 text-lg xl:text-xl">
          10 Reasons to invest in SEO copywriting services
        </h3>
        {!isFirst && (
          <p className="text-slate-500 line-clamp-3">{article.content}</p>
        )}
        <a href="#" className="block">
          <Button
            className={` border-green-400 rounded-full text-green-400 hover:text-green-400 ${
              isFirst ? "px-8 py-6" : "p-6"
            }`}
            variant={"outline"}
          >
            {isFirst ? "Read Full Article" : <Eye color="#4ade80" />}
          </Button>
        </a>
      </div>
    </>
  );
}
