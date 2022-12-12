import Menu from "../components/nav";
import { useState, useEffect, } from "react";
import { getAll, addToPokedex } from "../api/pokemon";
import '../App.css';

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
    <Menu />
    <h1>Liste des pokémons</h1>
    <div className="pokemon-list">
      <div class="flex">
        {pokemons.map((pokemon, key) => {
          return <div key={key} className="bloc-pokemon">
            <h2>{pokemon.name}</h2>
            <img class="avatar" src={pokemon.img} /><br />
            {/* <img class="type" src={type.img} /> */}
            <button class="ball" onClick={() => addToPokedex(pokemon) }><img class="ball" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFgeicwnl_0nvjfll3VVaEME0c_SjmsPL0bgU2wiSttw&s"}/> </button>
          </div>
        })}
      </div>
      <br/>
    </div>

  </div>;
}

export default Pokémons;