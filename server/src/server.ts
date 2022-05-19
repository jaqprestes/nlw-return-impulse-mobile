import express from 'express'
import cors from 'cors'
import { routes } from './routes';

const app = express();

//GET, POST, PUT, PATCH, DELETE
//GET = BUSCAR INFORMAÇÕES
//POST = CADASTRAR INFORMAÇÕES
//PUT = ATUALIZAR INFORMAÇÕES DE UMA ENTIDADE
//PATCH = ATUALIZAR UMA INFORMAÇÃO ÚNICA DE UMA ENTIDADE
//DELETE = DELETAR UMA INFORMAÇÃO

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('HTTP server running!');
});               