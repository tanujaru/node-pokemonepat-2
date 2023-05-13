//Instantiation ************
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
//middle
const app = express();
const port = 3000 
//Route**********************
const pokemon = require('./models/pokemon.js');

app.use(express.urlencoded({extended:true}))
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

app.get('/', function(req, res){
    res.send(`<h2><a href='/pokemon'>Welcome to the Pokemon App!!!!!</a></h2>`);
});   

app.get('/pokemon', (req, res)=>{
    pokemon.find({}, (error, allPokemon)=>{
        res.render('Index', {
            pokemon: allPokemon
        });
    });
});

app.get('/pokemon/new', (req, res)=>{
    res.render('New');
});

app.post('/pokemon/', (req, res)=>{
    pokemon.create(req.body, (error, createdPokemon)=>{
        res.redirect('/pokemon');
    });
});
//show************************

app.get('/pokemon/:id', (req, res)=>{
    pokemon.findById(req.params.id, (err, foundPokemon)=>{
        res.render('Show', {
            pokemon:foundPokemon
        });
    });
});
//Env***************
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    
});
//Listening******************
app.listen(3000, function () {
    console.log('Listening on port 3000');
});