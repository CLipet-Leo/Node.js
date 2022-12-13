import Menu from "../components/nav";
import { useState, useEffect, } from "react";
import { getAll, addToPokedex } from "../api/pokemon";

function Admin(props) {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => { 
    const pokemonsFetched = getAll();
    pokemonsFetched
      .then(result => setPokemons(result))
      .catch(error => console.error("Erreur avec notre API :", error.message));
  }, []);

  return <>
    <Menu />
    <h1>Gestion des pokémons</h1>
    <div className="pokemon-list">
      <div class="flex">
        {pokemons.map((pokemon, key) => {
          return <div key={key} className="bloc-pokemon">
            <h2>{pokemon.name}</h2>
            <img class="avatar" src={pokemon.img} alt=""/><br />
            {/* <img class="types" src={types.img} /> */}
            <button class="ball" onClick={()=>addToPokedex(pokemon)}><img class="ball" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFgeicwnl_0nvjfll3VVaEME0c_SjmsPL0bgU2wiSttw&s"} alt=""/> </button>
          </div>
        })}
      </div>
      <br/>
    </div>
  </>;
}

export default Admin;