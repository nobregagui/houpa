var express = require('express');
var router = express.Router();
const { check, validationResult, body  } = require('express-validator')
const telaInicialController = require('../controllers/telaInicialController')
const controllerCadastro = require('../controllers/cadastroRoupasController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/telaInicial', telaInicialController.index)


router.get('/cadastro', controllerCadastro.index)

module.exports = router;
