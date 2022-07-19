const FileiraModel = require('../models/Fileira');
const ProdutoModel = require('../models/Produtos');

exports.paginaInicialAdmin = async (req, res)=>{
    const fileiras = await FileiraModel.find();
    const produtos = await ProdutoModel.find();

    try{
        res.render('admin', {error: '', fileiras, produtos});
    }catch(error){
        console.log(error);
    };
};

exports.adicionarFileira = async (req, res)=>{
    const fileiras = await FileiraModel.find();
    const produtos = await ProdutoModel.find();
    const { titulo } = req.body;

    if(!titulo){
        return res.render('admin', {error: 'Preencha o campo titulo para adicionar uma fileira.', fileiras, produtos});
    };

    const novaFileira = new FileiraModel({
        titulo: titulo,
    });

    try{
        await novaFileira.save();
        res.redirect('http://localhost:3000/admin');
    }catch(error){
        console.log(error);
    };
};

exports.deletarFileira = async (req, res)=>{
    const fileiraDeletada = req.body.id;
    const produtosDaFileira = await ProdutoModel.find({fileira: `${fileiraDeletada[0]}`});

    try{
        await FileiraModel.findByIdAndDelete(fileiraDeletada[1]);

        for(let i=0; i<produtosDaFileira.length; i++){
            await ProdutoModel.findByIdAndDelete(produtosDaFileira[i]);
        }
        res.redirect('http://localhost:3000/admin');
    }catch(error){
        console.log(error);
    };
};

exports.criarProduto = async (req, res)=>{
    const fileiras = await FileiraModel.find();
    const produtos = await ProdutoModel.find();
    const { name, preco, select } = req.body;

    if(!name || !preco){
        return res.render('admin', {error: 'Para criar um produto é preciso preencher todos os campos.', fileiras, produtos});
    };

    if(select === 'valorNuloSelect'){
        return res.render('admin', {error: 'É preciso selecionar uma fileira para criar um produto.', fileiras, produtos});
    }

    const novoProduto = new ProdutoModel({
        nome: name,
        preco: preco,
        fileira: select,
    });

    try{
        await novoProduto.save();
        res.redirect('http://localhost:3000/admin');
    }catch(error){
        console.log(error);
    }
};

exports.deletarProduto = async (req, res)=>{
    const { id } = req.body;

    try{
        await ProdutoModel.findByIdAndDelete(id);
        res.redirect('http://localhost:3000/admin');
    }catch(error){
        console.log(error);
    };
};