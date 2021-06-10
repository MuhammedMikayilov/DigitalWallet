import express, { Request, Response } from "express";
import { Card, Playlist } from "./models";
import { ICardPayload, ITopupPayload } from "./mmodels";

export const CardRouter = express.Router();

//list
CardRouter.get("/", async (req: Request, res: Response) => {
  try {
    const songs = await Card.find();
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ mesage: error.mesage });
  }
});
//create
CardRouter.post("/", async (req: Request, res: Response) => {
  const cardPayload: ICardPayload = {
    ...req.body,
  };
  const card = new Card(cardPayload);
  try {
    const newCard = await card.save();
    res.status(200).json(newCard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//get
CardRouter.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const card = await Card.findById(id);
    if (!card) {
      res.status(404).json({ message: "Not found" });
    } else {
      res.json(card);
    }
  } catch (error) {
    res.status(500).json({ mesage: error.mesage });
  }
});

//update

CardRouter.patch("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    let card = await Card.findById(id);
    if (!card) {
      res.status(404).json({ message: "Not found" });
    } else {
      await Card.findByIdAndUpdate(id, req.body, {
        useFindAndModify: true,
      });
      card = await Card.findById(id);

      res.json(card);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// delete
CardRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const card = await Card.findById(id);
    if (!card) {
      res.status(404).json({ message: "Not found" });
    } else {
      await card.remove();
      res.json({ message: "Deleted" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export const TopupRouter = express.Router();

// get
TopupRouter.get("/", async (req: Request, res: Response) => {
  try {
    const list = await Playlist.find();
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ mesage: error.mesage });
  }
});

//cretae
TopupRouter.post("/", async (req: Request, res: Response) => {
  const listPayload: ITopupPayload = {
    ...req.body,
  };
  const event = new Playlist(listPayload);
  try {
    const newlist = await event.save();
    res.status(200).json(newlist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// delete
TopupRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const list = await Playlist.findById(id);
    if (!list) {
      res.status(404).json({ message: "Not found" });
    } else {
      await list.remove();
      res.json({ message: "Deleted" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//update

TopupRouter.patch("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    let list = await Playlist.findById(id);
    if (!list) {
      res.status(404).json({ message: "Not found" });
    } else {
      await Playlist.findByIdAndUpdate(id, req.body, {
        useFindAndModify: true,
      });
      list = await Playlist.findById(id);

      res.json(list);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
