import { ADD_ITEM, Item } from "./types";
import { ActionCreator } from "redux";
import { ItemActionTypes } from "./types";

export const addItemRequest: ActionCreator<ItemActionTypes> = (item: Item) => {
  return { type: ADD_ITEM, payload: item };
};
