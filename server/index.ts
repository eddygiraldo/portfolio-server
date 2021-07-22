import express from 'express';
import { portfolioApi } from './routes/portfolio';

const PORT = 3000;
const app = express();

portfolioApi(app);

app.listen(PORT, () => {
  console.log(`The application is listening on http://localhost:${PORT}`);
});
