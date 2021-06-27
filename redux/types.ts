export interface Item {
  title: string;
  category: Category;
  adress: string;
  ville: Ville;
}

export interface Filer {
  ville: number;
  category: number;
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
  filteredItems: Item[];
}

export const ADD_ITEM = "ADD_ITEM";

export const FILTER_ITEMS = "FILTER_ITEMS";

interface AddItemAction {
  type: typeof ADD_ITEM;
  payload: Item;
}

interface FilterItemsAction {
  type: typeof FILTER_ITEMS;
  payload: Filer;
}

export type ItemActionTypes = AddItemAction | FilterItemsAction;
