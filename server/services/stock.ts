import { IStock } from '../interfaces/IStock';
import { getAleatoryPrice } from '../utils';

export class Stock implements IStock {
  name: string;
  buyPrice: number;
  price: number;

  constructor(name: string, buyPrice: number) {
    this.name = name;
    this.buyPrice = buyPrice;
  }

  getPrice(date: string) {
    this.price = getAleatoryPrice();
  }
}
