import { CardRouter, TopupRouter } from './songs'

export const ROUTES = [
  {
    path: '/card',
    router: CardRouter
  },
  {
    path: '/topup',
    router: TopupRouter
  }
]
