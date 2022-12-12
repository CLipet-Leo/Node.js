import Menu from "../components/nav";
import { useState, useEffect, } from "react";
import { getAll, addToPokedex } from "../api/pokemon";

function Pokémons(props) {
  const [pokemons, setPokemons] = useState([]);
  //va s'executer seulement au lancement du composant (dep: [])
  useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = getAll();
    pokemonsFetched
      .then(result => setPokemons(result))
      .catch(error => console.error("Erreur avec notre API :", error.message));
  }, []);

  return <div>
    <h1>Liste des pokémons</h1>
    <Menu />
    <div className="pokemon-list">
      <div class="flex">
        {pokemons.map((pokemon, key) => {
          return <div key={key} className="bloc-pokemon">
            {/* <img className="avatar" src={pokemon.img} /> */}
            <h2>{pokemon.name}</h2>
            <button onClick={() => addToPokedex(pokemon)}>Capturer !</button>
          </div>
        })}
      </div>
    </div>

  </div>;
}

export default Pokémons;