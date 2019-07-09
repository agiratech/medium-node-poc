import * as bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const port = process.env.SERVER_PORT;
const app = express();
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send( 'Hello world!' );
});
app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
