import { Category, Item, Ville } from "../../redux/types";
export const mockedItems: Item[] = [
  {
    title: "Fuji Sushi",
    category: { id: 1, name: "Restaurant" },
    adress: "Avenu le caire",
    ville: { id: 1, name: "Tetouan" },
    img: require("../../assets/Restaurant-1.jpg"),
  },
  {
    title: "Ryad alkhair",
    category: { id: 2, name: "Hotel" },
    adress: "Ibn Batouta",
    ville: { id: 1, name: "Tetouan" },
    img: require("../../assets/Hotel-1.jpg"),
  },
  {
    title: "Assur",
    category: { id: 3, name: "Assurance" },
    adress: "TAvenue Challa",
    ville: { id: 1, name: "Tetouan" },
    img: require("../../assets/Assurance-1.jpg"),
  },
  {
    title: "Hotel Mogador",
    category: { id: 3, name: "Hotel" },
    adress: "TAvenue Challa",
    ville: { id: 1, name: "Tetouan" },
    img: require("../../assets/Hotel-2.jpg"),
  },
  {
    title: "Restaurant Ifoulki",
    category: { id: 1, name: "Restaurant" },
    adress: "TAvenue Challa",
    ville: { id: 1, name: "Tetouan" },
    img: require("../../assets/Restaurant-2.jpg"),
  },
];

export const mockedVilles: Ville[] = [
  {
    id: 1,
    name: "Tetouan",
  },
  {
    id: 2,
    name: "Casablanca",
  },
  {
    id: 3,
    name: "Rabat",
  },
  {
    id: 4,
    name: "Fnideq",
  },
];

export const mockedCategories: Category[] = [
  { id: 1, name: "Restaurant" },
  { id: 2, name: "Hotel" },
  { id: 3, name: "Assurance" },
];
