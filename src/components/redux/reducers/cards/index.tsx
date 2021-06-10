import { ACTION_TYPES } from "../../actions/actionTypes";
import { ICards } from "../../interfaces/cards";

export const reducerCards = (state: ICards[] = [], action: any) => {
  switch (action.type) {
    case ACTION_TYPES.GET_CARDS:
      return { ...state, cards: action.payload };
    case ACTION_TYPES.ADD_CARDS:
      return { ...state, cards: action.payload };
    default:
      return state;
  }
};
