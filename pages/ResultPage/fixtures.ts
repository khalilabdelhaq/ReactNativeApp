export interface Item {
  title: string;
  type: string;
  adress: string;
}

export const mockedItems: Item[] = [
  {
    title: "Fuji Sushi",
    type: "Restaurant",
    adress: "Tetouan,Maroc",
  },
  {
    title: "Ryad alkhair",
    type: "Ryad",
    adress: "Tetouan,Maroc",
  },
  {
    title: "Fuji Sushi",
    type: "",
    adress: "Tetouan,Maroc",
  },
];
