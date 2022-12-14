var cors = require('cors');

const express = require("express");
const dbo = require("./db/db");
const app = express();
const port = 4444;

dbo.connectToServer();
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
const jsonParser = bodyParser.json();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});

/* Pokémon */

app.get("/pokemon/list", function (req, res) {
    const dbConnect = dbo.getDb();
    dbConnect
      .collection("Pokemon")
      .find({})
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching pokemons!");
        } else {
          res.json(result);
        }});
  });
  
app.post('/pokemon/insert', jsonParser, (req, res) => {
  const body = req.body;
  const dbConnect = dbo.getDb();
  dbConnect
    .collection('Pokemon')
    .insertOne({...body})
    .then(function (err, result){
      if (err) {
        res.status(400).send(err);
      } else {
        res.json(result);
      }})
      .catch(err=>res.json(err));
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

app.post('/pokemon/imgupdate', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  const pokemon = dbConnect.collection('Pokemon');
  const result = pokemon.updateOne({'img': body.previmg}, {$set: {'img': body.newimg}});
  result.then(function (err, result){
    if (err) {
      res.status(400).send(err)
    } else {
      res.json(result)
    }});
});

app.delete('/pokemon/delete', jsonParser, (req, res) => {
  const body = req.body;
  const dbConnect = dbo.getDb();
  dbConnect
  .collection('Pokemon')
  .deleteOne(body)
  .then(function (err, result){
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(result);
    }});
});

/* Pokédex */
app.get("/pokedex/list", function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
    .collection('Pokedex')
    .find({})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching pokemons!");
      } else {
        res.json(result);
      }});
});

app.post('/pokedex/insert', jsonParser, (req, res) => {
  const body = req.body;
  const dbConnect = dbo.getDb();
  console.log('Added:', body.name, 'to pokedex');
  dbConnect
    .collection('Pokedex')
    .insertOne({...body})
    .then(function (err, result){
      if (err) {
        res.status(400).send(err);
      } else {
        res.json(result);
      }})
      .catch(err=>res.json(err));
});

app.post('/pokedex/delete', jsonParser, (req, res) => {
  const body = req.body;
  const dbConnect = dbo.getDb();
  dbConnect
  .collection('Pokedex')
  .deleteOne({...body})
  .then(function (err, result){
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(result);
    }});
});

/* Types */
app.post('/types/insert', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  const types = dbConnect.collection('types')
  types.insertOne({...body})
    .then(function (err, result){
      if (err) {
        res.status(400).send(err);
      } else {
        res.json(result);
      }});
});