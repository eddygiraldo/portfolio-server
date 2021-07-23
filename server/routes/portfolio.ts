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

  router.post('/profit', (req, res) => {
    const {
      body: { startDate, endDate },
    } = req;
    console.log({ startDate, endDate });

    const data = portfolio.getProfit(startDate, endDate);

    res.json({
      message: 'profit',
      data,
    });
  });
};
