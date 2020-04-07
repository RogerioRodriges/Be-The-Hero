const express = require('express');//pacote express
const cors = require('cors');
const routes = require('./routes');// importando uma variavel routes arquivo routes.js

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
*  Rota / Recurso
*/

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)//1
  * Route Params: Parâmetros utilizados para identificar recursos//2
  * Request Body: Corpo da requisição, utilizado para criar ou alterar o usuario
  */

  /**
   * SQL: MySQL, SQLite(armazenado como aquivo extensao sqlite ), PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL(banco nao relacionais): MongoDB(velocidade de inicilizacao), CouchDb
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where //javascrit
    */


app.listen(3333);

