var express = require('express');
var router = express.Router();
const UserController = require('../controllers/cadastroRoupasController')
const logSiteMiddleware = require('../middlewares/logSite')
const { check, validationResult, body } = require('express-validator')


/* GET users listing. */
router.get('/', UserController.index);

router.get('/cadastro', UserController.cadastro)
router.post('/cadastro', logSiteMiddleware, [
    check('nome').isLength({min: 5}).withMessage('O nome do produto deve conter no mínimo 3 caractéres'),
    check('descricao').isLength({min: 20}).withMessage('Descreva melhor o produto, com no minímo 20 caractéres'),
    check('tamanho').notEmpty().withMessage('Por favor, esolha um tamanho para o seu produto!')
], UserController.store)

router.get('/ver/:id', UserController.findById)
router.get('/search', UserController.search)

router.get('/editar/:id', UserController.edit)
router.post('/editar', UserController.update)


router.get('/delete/:id', UserController.delete)


module.exports = router;
