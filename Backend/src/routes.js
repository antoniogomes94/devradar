const { Router } = require('express');
const DevController = require('./Controllers/DevController');
const SearchController = require('./Controllers/SearchController');

const routes = Router();

//Metodos HTTP: GET, POST, PUT, DELETE 

//Tipos de paramentros:

//Query Params: Ficam visiveis na url - request.query; (filtros, ordenacao, paginação...)
//route Params: o parametros ficam direto na rota - request.query; user 'users/:id' , id é o nome do parametro;
//Body: Dados para criação ou alteração de um registro - request.body  

//MongoDB (Não-Relacional)
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;