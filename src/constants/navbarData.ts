export type NavItem = {
  name: string;
  path: string;
};

export const navData: NavItem[] = [
  { name: "Главная", path: "/" },
  { name: "Экскурсии по Парижу", path: "/excursions-in-paris" },
  {
    name: "Экскурсии по пригородам Парижа",
    path: "/excursions-to-the-suburbs-of-paris",
  },
  { name: "Туры по Франции", path: "/tours-in-france" },
];
