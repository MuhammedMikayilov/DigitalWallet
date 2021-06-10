import { CardRouter, TopupRouter } from "./wallet/index";

export const ROUTES = [
  {
    path: "/card",
    router: CardRouter,
  },
  {
    path: "/topup",
    router: TopupRouter,
  },
];
