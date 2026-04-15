export type NavItem = {
  name: string;
  path: string;
};

export const navData: NavItem[] = [
  { name: "Excursions", path: "/" },
  { name: "Pricelist", path: "/pricing" },
  { name: "Transfers", path: "/transfers" },
  { name: "About", path: "/about" },
  { name: "Reviews", path: "/reviews" },
  { name: "News", path: "/news" },
  { name: "Contacts", path: "/contacts" },
];
