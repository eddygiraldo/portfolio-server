import express, { Express } from 'express';
import { Portfolio } from '../services/portfolio';

export const portfolioApi = (app: Express) => {
  const router = express.Router();
  const portfolio = new Portfolio();

  app.use('/portfolio', router);

  router.get('/stocks', (req, res) => {
    const data = portfolio.getStocks();
    res.json({
      message: 'Stocks loaded',
      data
    });
  })

  router.get('/profit', (req, res) => {
    const data = {};
    res.json({
      message: 'Profit loaded',
      data
    });
  })
}
