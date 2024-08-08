export type NavLink = {
  text: string;
  href: string;
};

export type NavLinkGroup = {
  text: string;
  children: NavLink[];
};

export type NavLinks = (NavLink | NavLinkGroup)[];

export const hasChildren = (
  link: NavLink | NavLinkGroup,
): link is NavLinkGroup => {
  return (link as NavLinkGroup).children !== undefined;
};

export const links: NavLinks = [
  { href: "/", text: "Home" },
  { href: "/events", text: "Events" },
  { href: "/gallery", text: "Gallery" },
  { text: "Store", href: "/store" },
  {
    text: "About us",
    children: [
      { href: "/faq", text: "FAQ" },
      { href: "/community", text: "Community" },
      { href: "/ad-art", text: "AD ART" },
    ],
  },
  { href: "https://go.aachen.ppi.id/lapor-diri", text: "Lapor Diri" },
];
