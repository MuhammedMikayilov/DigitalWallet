import { ICards } from "../../../components/redux/interfaces/cards";
import { HttpClient } from "../../HttpClient";

class CardsService extends HttpClient {
  constructor() {
    super("http://localhost:8000");
  }

  getCards() {
    return this.get("card");
  }

  addCards(body: ICards) {
    return this.post("card", body);
  }

  deleteSong(id: string) {
    return this.delete("card", id);
  }
}
export const cardsService = new CardsService();
