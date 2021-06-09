interface ICurrency {
  currency: string;
  value: number;
}

export interface ICards {
  wal_num: number;
  exp_date: string;
  cvv: string;
  bank_name: string;
  card_type: string;
  currency_type: ICurrency;
}
