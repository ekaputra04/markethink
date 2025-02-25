import { FooterItemType } from "@/types/types";
import { Copyright, Facebook, Instagram, Twitter } from "lucide-react";

const footerItems: FooterItemType[] = [
  {
    title: "Menu",
    details: [
      {
        name: "Home",
        link: "",
      },
      {
        name: "Features",
        link: "",
      },
      {
        name: "Pricing About",
        link: "",
      },
      {
        name: "Contact Us",
        link: "",
      },
    ],
  },
  {
    title: "Services",
    details: [
      {
        name: "Content Strategy",
        link: "",
      },
      {
        name: "Content Development",
        link: "",
      },
      {
        name: "Content Creation",
        link: "",
      },
      {
        name: "Content Optimazion",
        link: "",
      },
    ],
  },
  {
    title: "Company",
    details: [
      {
        name: "Site Map",
        link: "",
      },
      {
        name: "Terms of Use",
        link: "",
      },
      {
        name: "Policy Notice",
        link: "",
      },
      {
        name: "Cookies",
        link: "",
      },
      {
        name: "Modern Slavery",
        link: "",
      },
    ],
  },
];

export default function Footer() {
  return (
    <div className="space-y-8 px-8 md:px-16 lg:px-32 py-24">
      <div className="gap-16 grid lg:grid-cols-5">
        <div className="space-y-8 col-span-2">
          <div className="flex justify-start items-center gap-2">
            <img src="/images/logo-black.png" alt="logo" className="w-8" />
            <p className="font-bold text-slate-700 text-xl">markethink</p>
          </div>
          <p className="text-slate-600">
            Marketing is a company that focus on developing company’s strategy
            for increase digital marketing
          </p>
          <div className="flex gap-8">
            <a href="#">
              <div className="bg-[#D6FF7E] p-4 rounded-full">
                <Facebook color="#334155" />
              </div>
            </a>
            <a href="#">
              <div className="bg-[#D6FF7E] p-4 rounded-full">
                <Twitter color="#334155" />
              </div>
            </a>
            <a href="#">
              <div className="bg-[#D6FF7E] p-4 rounded-full">
                <Instagram color="#334155" />
              </div>
            </a>
          </div>
        </div>
        <div className="gap-8 grid grid-cols-1 md:grid-cols-3 col-span-3">
          {footerItems.map((item, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-slate-700 text-lg">
                {item.title}
              </h3>
              <ul className="space-y-2">
                {item.details.map((detail, index) => (
                  <li key={index}>
                    <a
                      href={detail.link}
                      className="text-slate-500 hover:underline"
                    >
                      {detail.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="flex justify-center items-center gap-2 mx-auto w-full">
        <Copyright className="w-5" color="#475569" />
        <p className="text-slate-600">
          Copyright Markethink. All right reserved
        </p>
      </div>
    </div>
  );
}
