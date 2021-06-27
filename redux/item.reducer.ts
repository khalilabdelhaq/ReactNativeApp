import { mockedItems } from "../pages/ResultPage/fixtures";
import { ADD_ITEM, FILTER_ITEMS, ItemState, ItemActionTypes } from "./types";

const initialItemState: ItemState = {
  items: mockedItems,
  filteredItems: [],
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
    case FILTER_ITEMS: {
      return {
        ...state,
        filteredItems: state.items.filter(
          (item) =>
            item.ville.id === action.payload.ville &&
            item.category.id === action.payload.category
        ),
      };
    }
    default:
      return state;
  }
}
