const express = require('express');
const router = express.Router();
const HomeController = require('../controller/HomeController');
const AdminController = require('../controller/AdminController');

router.get('/', HomeController.paginaInicialHome);

router.get('/admin', AdminController.paginaInicialAdmin);
router.post('/admin-nova-fileira', AdminController.adicionarFileira);
router.post('/admin-fileira-delete', AdminController.deletarFileira);
router.post('/admin-criar-produto', AdminController.criarProduto);
router.post('/admin-deletar-produto', AdminController.deletarProduto);

module.exports = router;