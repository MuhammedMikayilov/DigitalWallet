import { ACTION_TYPES } from "../actionTypes";
import { cardsService } from "../../../../Api/Service/Cards/index";
import { ICards } from "../../interfaces/cards";

export const getCardsDetail = () => (dispatch: Function) => {
  cardsService.getCards().then(({ data }) => {
    dispatch({
      type: ACTION_TYPES.GET_CARDS,
      payload: data,
    });
  });
};

export const addCards = (body: ICards) => (dispatch: Function) => {
  cardsService.addCards(body).then(({ data }) => {
    dispatch({
      type: ACTION_TYPES.ADD_CARDS,
      payload: body,
    });
  });
};
