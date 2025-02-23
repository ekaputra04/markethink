import { NavbarItemType } from "@/types/types";
import { Button } from "./ui/button";

const navbarItems: NavbarItemType[] = [
  {
    name: "Features",
    href: "#",
  },
  {
    name: "Pricing",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact Us",
    href: "#",
  },
];

export default function Navbar() {
  return (
    <>
      <div className="top-0 z-50 absolute flex justify-between items-center bg-transparent px-32 py-6 w-full">
        <div className="flex justify-start items-center gap-2">
          <img src="/images/logo.png" alt="logo" className="w-8" />
          <p className="font-bold text-white text-xl">markethink</p>
        </div>
        <ul className="flex justify-between items-center gap-10">
          {navbarItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="text-white hover:underline">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <Button className="bg-green-50/30 px-8 py-6 border border-[#D6FF7E] rounded-full text-white">
          Free Trial
        </Button>
      </div>
    </>
  );
}
