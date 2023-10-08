import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import express from 'express';
// import "reflect-metadata";
import router from './routes';
import cors from 'cors';

const app = express();
const PORT = process.env.APLICATION_PORT || 3344;


const allowedOrigins = ['http://localhost:3000', 'https://recad.flystart.com.br'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));

app.use(express.json());
app.use(router);





app.listen(PORT, () => {
  console.clear();
  console.log(`==========================================`);
  console.log(`...Servidor rodando na porta ${PORT}...`);
});