import { IStock } from '../interfaces/IStock';
import { getAleatoryPrice } from '../utils';

const MAX_LOSS_EARNINGS = 30;

export class Stock implements IStock {
  name: string;
  buyPrice: number;
  price: number;

  constructor(name: string, buyPrice: number) {
    this.name = name;
    this.buyPrice = buyPrice;
  }

  getPrice(date: Date) {
    const minPrice = this.buyPrice <= MAX_LOSS_EARNINGS ? 0 : this.buyPrice - MAX_LOSS_EARNINGS;
    const maxPrice = this.buyPrice + MAX_LOSS_EARNINGS;
    this.price = getAleatoryPrice(minPrice, maxPrice);
  }
}
