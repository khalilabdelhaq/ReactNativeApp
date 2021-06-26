import { Item } from "../../redux/types";
export const mockedItems: Item[] = [
  {
    title: "Fuji Sushi",
    category: { id: 1, name: "Restaurant" },
    adress: "Avenu le caire",
    ville: { id: 1, name: "Tetouan" },
  },
  {
    title: "Ryad alkhair",
    category: { id: 2, name: "Hotel" },
    adress: "Ibn Batouta",
    ville: { id: 1, name: "Tetouan" },
  },
  {
    title: "Assur",
    category: { id: 2, name: "Asurance" },
    adress: "TAvenue Challa",
    ville: { id: 1, name: "Tetouan" },
  },
];
