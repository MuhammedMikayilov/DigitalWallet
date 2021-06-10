<<<<<<< HEAD:server/wallet/wallet/index.ts
import express, { Request, Response } from "express";
import { Card, Playlist } from "./models";
import { ICardPayload, ITopupPayload } from "./mmodels";
=======
import express, { Request, Response } from 'express'
import { Card, Topup } from './models'
import { ICardPayload, ITopupPayload } from './mmodels'
>>>>>>> 5f8aa16eb525668ec0fa0ad3dcf087eb68dbb2af:serverTwo/wallet/index.ts

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
<<<<<<< HEAD:server/wallet/wallet/index.ts
  };
  const card = new Card(cardPayload);
  try {
    const newCard = await card.save();
    res.status(200).json(newCard);
=======
  }
  const card = new Card(cardPayload)
  try {
    const newCard = await card.save();

    res.status(200).json({
     wal_num:"**** **** **** "+newCard.wal_num.split(' ')[3],
     exp_date:newCard.exp_date,
     cvv: newCard.cvv,
     bank_name: newCard.bank_name,
     card_type: newCard.card_type,
     currency_type:newCard.currency_type

})
>>>>>>> 5f8aa16eb525668ec0fa0ad3dcf087eb68dbb2af:serverTwo/wallet/index.ts
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
<<<<<<< HEAD:server/wallet/wallet/index.ts
    const list = await Playlist.find();
    res.status(200).json(list);
=======
    const list = await Topup.find()
    res.status(200).json(list)
>>>>>>> 5f8aa16eb525668ec0fa0ad3dcf087eb68dbb2af:serverTwo/wallet/index.ts
  } catch (error) {
    res.status(500).json({ mesage: error.mesage });
  }
});

//cretae
TopupRouter.post("/", async (req: Request, res: Response) => {
  const listPayload: ITopupPayload = {
<<<<<<< HEAD:server/wallet/wallet/index.ts
    ...req.body,
  };
  const event = new Playlist(listPayload);
=======
    ...req.body
  }
  const event = new Topup(listPayload)
>>>>>>> 5f8aa16eb525668ec0fa0ad3dcf087eb68dbb2af:serverTwo/wallet/index.ts
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
<<<<<<< HEAD:server/wallet/wallet/index.ts
    const { id } = req.params;
    const list = await Playlist.findById(id);
=======
    const { id } = req.params
    const list = await Topup.findById(id)
>>>>>>> 5f8aa16eb525668ec0fa0ad3dcf087eb68dbb2af:serverTwo/wallet/index.ts
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
<<<<<<< HEAD:server/wallet/wallet/index.ts
    let list = await Playlist.findById(id);
=======
    let list = await Topup.findById(id)
>>>>>>> 5f8aa16eb525668ec0fa0ad3dcf087eb68dbb2af:serverTwo/wallet/index.ts
    if (!list) {
      res.status(404).json({ message: "Not found" });
    } else {
<<<<<<< HEAD:server/wallet/wallet/index.ts
      await Playlist.findByIdAndUpdate(id, req.body, {
        useFindAndModify: true,
      });
      list = await Playlist.findById(id);
=======
      await Topup.findByIdAndUpdate(id, req.body, {
        useFindAndModify: true
      })
      list = await Topup.findById(id)
>>>>>>> 5f8aa16eb525668ec0fa0ad3dcf087eb68dbb2af:serverTwo/wallet/index.ts

      res.json(list);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
