export interface IProduct {
  _id: string;
  user_id: string;
  product_name: string;
  category: string;
  description: string;
  buy_price: string;
  sell_price: string;
  images: string[];
  quantity: number;
  ratings?: number[];
}
