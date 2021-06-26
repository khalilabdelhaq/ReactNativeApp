export interface Item {
  title: string;
  category: Category;
  adress: string;
  ville: Ville;
}

export interface Ville {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
}
export interface ItemState {
  items: Item[];
}

export const ADD_ITEM = "ADD_ITEM";

interface AddItemAction {
  type: typeof ADD_ITEM;
  payload: Item;
}

export type ItemActionTypes = AddItemAction;
