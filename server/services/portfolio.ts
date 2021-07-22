import { IStock } from "../interfaces/IStock";
import { getAleatoryPrice, makeAleatoryName } from "../utils";
import { Stock } from "./stock";

const STOCK_LENGTH = 10;

export class Portfolio {
  stocks: IStock[];

  constructor() {
    this.stocks = this.simulateStocks(STOCK_LENGTH)
  }

  simulateStocks(stocksLength: number): IStock[] {
    const stocks: IStock[] = [];

    for (let i = 0; i < stocksLength; i++) {
      const name = makeAleatoryName();
      const price = getAleatoryPrice();
      const stock = new Stock(name, price);
      stocks.push(stock);
    }

    return stocks;
  }

  getProfit(startDate: string, endDate: string) {
    return `${startDate}, ${endDate}`;
  }

  getStocks() {
    return this.stocks;
  }
}