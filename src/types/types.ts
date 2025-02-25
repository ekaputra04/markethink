export type NavbarItemType = {
  name: string;
  href: string;
};

export type ContentItemType = {
  image: string;
  name: string;
  description: string;
};

export type ArticleItemType = {
  title: string;
  publishedDate: Date;
  image: string;
  content: string;
};

export type FooterItemType = {
  title: string;
  details: {
    name: string;
    link: string;
  }[];
};
