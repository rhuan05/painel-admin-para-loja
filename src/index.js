const express = require('express');
const app = express();
require('dotenv').config();

// Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// Ejs
app.set('view engine', 'ejs');

// Mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL , ()=>{
    console.log('Conectato ao banco de dados.');
});

const NameSchema = new mongoose.Schema({
    name: String
});

const NameModel = mongoose.model('name', NameSchema);

// Static
const path = require('path');

app.use(express.static(path.join(__dirname + '/public')));

// Rotas
app.get('/', (req, res)=>{
    res.render('home');
});
app.post('/', async (req, res)=>{
    const name = req.body;

    try{
        const newName = new NameModel({
            name: name.name
        });
        await newName.save();
        res.render('home');
    }catch(err){
        console.log(err);
    }
});

app.get('/nomes', async (req, res)=>{
    const namesInDB = await NameModel.find();
    res.render('search', { searchsFind: '', namesInDB: namesInDB });
});
app.post('/nomes', async (req, res)=>{
    const namesInDB = await NameModel.find();
    const search = req.body;
    const searchName = await NameModel.find({name: search.search});

    if(searchName.length === 0){
        return res.render('search', { searchsFind: 'Nome não cadastrado.', namesInDB: namesInDB });
    };
    
    try{
        res.render('search', { searchsFind: searchName[0].name, namesInDB: namesInDB });
    }catch(err){
        console.log(err);
    }
});
app.post('/nomes/delete', async (req, res)=>{
    const idNameForDelete = req.body.id;
    
    await NameModel.findByIdAndRemove(idNameForDelete);
    res.redirect('http://localhost:3000/nomes');
});
app.post('/nomes/put', async (req, res)=>{
    const nameForEdit = req.body;

    await NameModel.findByIdAndUpdate(nameForEdit.namePut, { name: nameForEdit.namePutEdited });
    res.redirect('http://localhost:3000/nomes');
});

app.listen(3000, ()=>{
    console.log('Servidor rodando.');
});