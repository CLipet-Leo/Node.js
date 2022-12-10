import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Pokédex from "./pages/Pokédex";
import Pokémons from "./pages/Pokémons";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//App.js
function App(props){
  return <Router>
      <Switch>
        <Route exact path="/"> {<Route path="pages/:id" children={<Home />} />/*ici on met l'URL dans le navigateur*/}
          <Home /> {/*ici on donne la page à afficher en fonction de cette URL*/}
        </Route>
        <Route path="/pokedex"> {<Route path="pages/:id" children={<Pokédex />} />}
          <Pokédex />
        </Route>
        <Route path="/pokemons"> {<Route path="pages/:id" children={<Pokémons />} />}
          <Pokémons />
        </Route>
      </Switch>
  </Router>
}

ReactDOM.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  document.getElementById("root")
);

export default App;
