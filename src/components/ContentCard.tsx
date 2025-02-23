import { ContentItemType } from "@/types/types";

interface ContentCardProps {
  item: ContentItemType;
}

export default function ContentCard({ item }: ContentCardProps) {
  return (
    <>
      <div className="space-y-4">
        <img src={item.image} alt="image" className="h-12" />
        <h3 className="font-semibold text-slate-700 text-xl">{item.name}</h3>
        <p className="text-slate-500">{item.description}</p>
      </div>
    </>
  );
}
