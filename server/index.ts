import express from 'express';
import { Portfolio } from './services/portfolio';
import { portfolioApi } from './routes/portfolio';

const PORT = 3000;
const app = express();

const portfolio = new Portfolio();

portfolioApi(app);



app.listen(PORT, () => {
    console.log(`The application is listening on http://localhost:${PORT}!`);
})