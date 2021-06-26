import { mockedItems } from "../pages/ResultPage/fixtures";
import { ADD_ITEM, ItemState, ItemActionTypes } from "./types";

const initialItemState: ItemState = {
  items: mockedItems,
};

export function itemReducer(
  state: ItemState = initialItemState,
  action: ItemActionTypes
): ItemState {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
