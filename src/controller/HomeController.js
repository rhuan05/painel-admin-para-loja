const FileiraModel = require('../models/Fileira');
const ProdutosModel = require('../models/Produtos');

exports.paginaInicialHome = async (req, res)=>{
    const fileiras = await FileiraModel.find();
    const fileiraProdutos = await ProdutosModel.find();

    res.render('home', {fileiras, fileiraProdutos});
};