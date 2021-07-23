import { IStock } from '../interfaces/IStock';
import { getAleatoryPrice, getMonthDifference, makeAleatoryName } from '../utils';
import { Stock } from './stock';

const STOCK_LENGTH = 10;
const PRICE_MIN = 50;
const PRICE_MAX = 900;

export class Portfolio {
  stocks: IStock[];

  constructor() {
    this.stocks = this.simulateStocks(STOCK_LENGTH);
  }

  simulateStocks(stocksLength: number): IStock[] {
    const stocks: IStock[] = [];

    for (let i = 0; i < stocksLength; i++) {
      const name = makeAleatoryName();
      const buyPrice = getAleatoryPrice(PRICE_MIN, PRICE_MAX);
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
    const annualReturn = Math.pow((profit + invested) / invested, 1 / years) - 1;
    const annualReturnPercentage = (annualReturn * 100).toFixed(2);
    return `${annualReturnPercentage}%`;
  }

  getProfit(startDateStr: string, endDateStr: string) {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    this.stocks.forEach((stock) => stock.getPrice(endDate));

    const totalProfit = this.getTotalProfit();
    const totalInvested = this.getTotalInvested();
    const years = getMonthDifference(startDate, endDate) / 12;

    const annualReturn = this.getAnnualReturn(totalInvested, totalProfit, years);

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
