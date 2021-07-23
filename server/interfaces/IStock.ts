export interface IStock {
  name: string;
  buyPrice: number;
  price?: number;
  getPrice(date: Date);
}
