import { HttpClient } from "../../HttpClient";

class CardsService extends HttpClient {
  constructor() {
    super("http://localhost:8000");
  }

  getCards() {
    return this.get("cards");
  }

  postSongs(body: FormData) {
    return this.post("cards", body);
  }

  deleteSong(id: string) {
    return this.delete("cards", id);
  }
}
export const cardsService = new CardsService();
