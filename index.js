const express = require("express");
const dbo = require("./db/db");
const app = express();
const port = 4444;

dbo.connectToServer();

//insert function
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const jsonParser = bodyParser.json();

/*
suite du code ici
*/

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});

/* index.js code before... */
app.get("/pokemon/list", function (req, res) {
    //on se connecte à la DB MongoDB
    const dbConnect = dbo.getDb();
    //premier test permettant de récupérer mes pokemons !
    const pokemon = dbConnect.collection("Pokemon")
    const types = dbConnect.collection("types")
      pokemon.find({}) // permet de filtrer les résultats
      /*.limit(50) // pourrait permettre de limiter le nombre de résultats */
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching pokemons!");
        } else {
          res.json(result);
        }});
  });
  
app.post('/pokemon/insert', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  const pokemon = dbConnect.collection('Pokemon')
  pokemon.insertOne(body)
    .then(function (err, result){
      if (err) {
        res.status(400).send(err);
      } else {
        res.json(result);
      }});
});

app.post('/pokemon/update', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  const pokemon = dbConnect.collection('Pokemon');
  const result = pokemon.updateOne({'name': body.prevname}, {$set: {'name': body.newname}});
  result.then(function (err, result){
    if (err) {
      res.status(400).send(err)
    } else {
      res.json(result)
    }});
});

app.post('/pokemon/delete', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  const pokemon = dbConnect.collection('Pokemon');
  pokemon.deleteOne(body)
  .then(function (err, result){
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(result);
    }});
});

/* Pokédex */
app.get("/pokedex/list", function (req, res) {
  //on se connecte à la DB MongoDB
  const dbConnect = dbo.getDb();
  //premier test permettant de récupérer mes pokemons !
  dbConnect
    .collection("Pokedex")
    .find({}) // permet de filtrer les résultats
    /*.limit(50) // pourrait permettre de limiter le nombre de résultats */
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching pokemons!");
      } else {
        res.json(result);
      }});
});

app.post('/pokedex/insert', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  const pokemon = dbConnect.collection('Pokedex')
  pokemon.insertOne(body)
    .then(function (err, result){
      if (err) {
        res.status(400).send(err);
      } else {
        res.json(result);
      }});
});

app.post('/pokedex/delete', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  const pokemon = dbConnect.collection('Pokedex');
  pokemon.deleteOne(body)
  .then(function (err, result){
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(result);
    }});
});

app.post('/types/insert', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  const types = dbConnect.collection('types')
  types.insertOne(body)
    .then(function (err, result){
      if (err) {
        res.status(400).send(err);
      } else {
        res.json(result);
      }});
});