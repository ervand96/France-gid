import { StaticImageData } from "next/image";
import defaultImage from "../assets/elements/placeholder.jpg";

export type Excursion = {
  id: string;
  name: string;
  duration: string;
  category: string;
  img: StaticImageData;
};

export const excursionsData: Excursion[] = [
  {
    id: "1",
    name: "Обзорная экскурсия по Парижу",
    duration: "4 ч",
    category: "Экскурсии по Парижу",
    img: defaultImage,
  },
  {
    id: "2",
    name: "Экскурсия по вечернему Парижу и круиз по Сене",
    duration: "3 ч",
    category: "Экскурсии по Парижу",
    img: defaultImage,
  },
  {
    id: "3",
    name: "Экскурсия по Монмартру",
    duration: "2 ч",
    category: "Экскурсии по Парижу",
    img: defaultImage,
  },
  {
    id: "4",
    name: "Экскурсия по Латинскому кварталу",
    duration: "2 ч",
    category: "Экскурсии по Парижу",
    img: defaultImage,
  },
  {
    id: "5",
    name: "Экскурсия по кварталу Марэ",
    duration: "2 ч",
    category: "Экскурсии по Парижу",
    img: defaultImage,
  },
  {
    id: "6",
    name: "Экскурсия по Лувру",
    duration: "2 ч",
    category: "Экскурсии по Парижу",
    img: defaultImage,
  },
  {
    id: "7",
    name: "Экскурсия на Эйфелеву башню",
    duration: "2 ч",
    category: "Экскурсии по Парижу",
    img: defaultImage,
  },
  {
    id: "8",
    name: "Посещение Гранд оперы",
    duration: "1.5 ч",
    category: "Экскурсии по Парижу",
    img: defaultImage,
  },
  {
    id: "9",
    name: "Экскурсия по Версальскому дворцу",
    duration: "4 ч",
    category: "Экскурсии по пригородам Парижа",
    img: defaultImage,
  },
  {
    id: "10",
    name: "Экскурсия по дворцу Фонтенбло",
    duration: "5 ч",
    category: "Экскурсии по пригородам Парижа",
    img: defaultImage,
  },
  {
    id: "11",
    name: "Экскурсия по замку Во лё Виконт",
    duration: "5 ч",
    category: "Экскурсии по пригородам Парижа",
    img: defaultImage,
  },
  {
    id: "12",
    name: "Экскурсия по замку Во лё Виконт при свечах",
    duration: "5 ч",
    category: "Экскурсии по пригородам Парижа",
    img: defaultImage,
  },
  {
    id: "13",
    name: "Экскурсия по замку Шантии",
    duration: "5 ч",
    category: "Экскурсии по пригородам Парижа",
    img: defaultImage,
  },
  {
    id: "14",
    name: "Экскурсия по Русскому кладбищу в Сен Женевьев дэ Буа",
    duration: "4 ч",
    category: "Экскурсии по пригородам Парижа",
    img: defaultImage,
  },
  {
    id: "15",
    name: "Посещение сафари-парка в Туари",
    duration: "5 ч",
    category: "Экскурсии по пригородам Парижа",
    img: defaultImage,
  },
  {
    id: "16",
    name: "Посещение парка «Франция в миниатюре»",
    duration: "5 ч",
    category: "Экскурсии по пригородам Парижа",
    img: defaultImage,
  },
  {
    id: "17",
    name: "Посещение Диснейленда в Париже",
    duration: "10 ч",
    category: "Экскурсии по пригородам Парижа",
    img: defaultImage,
  },
  {
    id: "18",
    name: "Экскурсия по замку Пьерфон",
    duration: "5 ч",
    category: "Экскурсии по регионам Франции",
    img: defaultImage,
  },
  {
    id: "19",
    name: "Экскурсия в Живерни - имение Клода Моне",
    duration: "5 ч",
    category: "Экскурсии по регионам Франции",
    img: defaultImage,
  },
  {
    id: "20",
    name: "Экскурсия по Шартру",
    duration: "6 ч",
    category: "Экскурсии по регионам Франции",
    img: defaultImage,
  },
  {
    id: "21",
    name: "Экскурсия по Нормандии",
    duration: "12 ч",
    category: "Экскурсии по регионам Франции",
    img: defaultImage,
  },
  {
    id: "22",
    name: "Экскурсия по замкам Луары",
    duration: "12 ч",
    category: "Экскурсии по регионам Франции",
    img: defaultImage,
  },
  {
    id: "23",
    name: "Экскурсия по Шампани",
    duration: "10 ч",
    category: "Экскурсии по регионам Франции",
    img: defaultImage,
  },
  {
    id: "24",
    name: "Экскурсия на Мон Сен Мишель",
    duration: "13 ч",
    category: "Экскурсии по регионам Франции",
    img: defaultImage,
  },
  {
    id: "25",
    name: "Посещение кабарэ Мулен Руж, Лидо, Крейзи Хорс",
    duration: "5 ч",
    category: "Экскурсии по Парижу",
    img: defaultImage,
  },
];
