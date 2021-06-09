import { ACTION_TYPES } from "../actionTypes";
import { cardsService } from "../../../../Api/Service/Cards/index";

export const getCardsDetail = () => (dispatch: Function) => {
  cardsService.getCards().then(({ data }) => {
    dispatch({
      type: ACTION_TYPES.GET_CARDS,
      payload: data,
    });
  });
};
