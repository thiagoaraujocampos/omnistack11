const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(express.json());

/*
Rotas e Recursos

Métodos HTTP:
  GET: Buscar/listar uma informação no back-end
  POST: Criar uma informação no back-end
  PUT: Alterar uma informação no back-end
  DELETE: Deletar uma informação no back-end

Tipos de parâmetros:
  QUERY: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  ROUTE: Parâmetros utilizados para identificar recursos
  Request Body: Corpo da requisição, utilizado para criar ou alterar recursos

SQL: MySQL, SQLite, PostgreSQL, Oracle...
NoSQL: MongoDB, CouchDB ...

Driver: SELECT * FROM users
Query Builder: table('users').select('*').where()
*/

app.use(cors());
app.use(routes);
app.use(errors());

module.exports = app;