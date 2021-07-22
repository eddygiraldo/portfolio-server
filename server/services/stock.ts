import { IStock } from "../interfaces/IStock";

export class Stock implements IStock {
  name: string;
  value: number;

  constructor(name: string, value: number) {
    this.name = name;
    this.value = value;
  }

  getPrice(startDate: string, endDate: string) {
    return `${startDate}, ${endDate}`;
  }
}
