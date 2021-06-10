interface ICurrency {
  key: string;
  currency: string;
  value: number;
}

export interface ICards {
  _id: string;
  wal_num: number;
  exp_date: string;
  cvv: string;
  bank_name: string;
  card_type: string;
  currency_type: ICurrency;
}
