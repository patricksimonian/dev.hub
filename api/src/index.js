import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { RESPONSES } from './constants/responses';
import { SERVER_LISTENING, SERVER_HEALTHY } from './constants/strings';
import config from './config//index.json';

dotenv.config();

const PORT = process.env.port || 3000;
const app = express();

const whitelist = config.cors;

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


app.get('/', (req, res) => {
  res.send(RESPONSES.asText['200']);
});

app.use(cors(corsOptions));

app.get('/ehlo', (req, res) => {
  res.status(200).json({
    message: SERVER_HEALTHY
  });
});

app.listen(PORT, () => {
  console.log(SERVER_LISTENING(PORT));
});
