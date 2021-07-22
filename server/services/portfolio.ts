import { IStock } from '../interfaces/IStock';
import { getAleatoryPrice, makeAleatoryName } from '../utils';
import { Stock } from './stock';

const STOCK_LENGTH = 10;

export class Portfolio {
  stocks: IStock[];

  constructor() {
    this.stocks = this.simulateStocks(STOCK_LENGTH);
  }

  simulateStocks(stocksLength: number): IStock[] {
    const stocks: IStock[] = [];

    for (let i = 0; i < stocksLength; i++) {
      const name = makeAleatoryName();
      const buyPrice = getAleatoryPrice();
      const stock = new Stock(name, buyPrice);
      stocks.push(stock);
    }

    return stocks;
  }

  getTotalProfit() {
    return this.stocks.reduce((a, b) => a + b.price - b.buyPrice, 0);
  }

  getTotalInvested() {
    return this.stocks.reduce((a, b) => a + b.buyPrice, 0);
  }

  getAnnualReturn(invested: number, profit: number, years: number) {
    const annualReturn =
      Math.pow((profit + invested) / invested, 1 / years) - 1;
    const annualReturnPercentage = (annualReturn * 100).toFixed(2);
    return `${annualReturnPercentage}%`;
  }

  getProfit(startDate: string, endDate: string) {
    this.stocks.forEach((stock) => stock.getPrice(endDate));
    const totalProfit = this.getTotalProfit();
    const totalInvested = this.getTotalInvested();
    const annualReturn = this.getAnnualReturn(totalInvested, totalProfit, 2);

    return {
      detail: this.stocks,
      profit: totalProfit,
      invested: totalInvested,
      annualReturn,
    };
  }

  getStocks() {
    return this.stocks.map(({ name, buyPrice }) => ({ name, buyPrice }));
  }
}
