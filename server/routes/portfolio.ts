import express, { Express } from 'express';
import { Portfolio } from '../services/portfolio';

export const portfolioApi = (app: Express) => {
  const router = express.Router();
  const portfolio = new Portfolio();

  app.use('/portfolio', router);

  router.get('/stocks', (req, res) => {
    const data = portfolio.getStocks();
    res.json({
      message: 'stocks',
      data,
    });
  });

  router.get('/profit', (req, res) => {
    const data = portfolio.getProfit('01/01/2021', '30/01/2021');
    res.json({
      message: 'profit',
      data,
    });
  });
};
