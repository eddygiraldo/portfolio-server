import express from 'express';
import swaggerUI from 'swagger-ui-express';
import { portfolioApi } from './routes/portfolio';
const swaggerDocument = require('./swagger.json');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

portfolioApi(app);

if (process.env.NODE_ENV === 'production') {
  swaggerDocument.host = `localhost:${PORT}`;
} else {
  swaggerDocument.host = 'portfolio-eddy-test.herokuapp.com';
}

app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`The application is listening on http://localhost:${PORT}`);
});
