export interface ISong{
    id: number;
    name:string;
    artist:string;
    upload_date:string;
    media_url:string
}

export interface IPlaylist{
    id: number;
    name: string;
    creation_date:string;
    author:string
    songs:ISong[]
}

interface ICurrency{
    currency:string;
    value:number
}

export interface ICardPayload{
    
    wal_num:string;
    exp_date:string;
    cvv:number;
    bank_name:string;
    card_type:string;
    currency_type:ICurrency;
}

export interface ITopupPayload{
  
    amount: object;
    card_select:object;
   
}