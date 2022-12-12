import Menu from "../components/nav";
import { useState, useEffect, } from "react";
import { getPokedex,delPokedex } from "../api/pokemon.js";

function Pokédex(props) {
    const [pokedex, setPokedex] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
        // récupérer la liste des users seulement au chargement du composant ! 
        const pokedexFetched = getPokedex();
        pokedexFetched
            .then(result => setPokedex(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);

    return <div>
        <Menu />
        <h1>Mon pokédex</h1>
        <div className="pokemon-list">
            <div class="flex">
                {pokedex.map((pokedex, key) => {
                    return <div key={key} className="bloc-pokemon">
                        <h2>{pokedex.name}</h2>
                        <img className="avatar" src={pokedex.img} /><br />
                        <button onClick={() => delPokedex(pokedex)}>Supprimer !</button>
                    </div>
                })}
            </div>
        </div>
        <br />
    </div>;
}

export default Pokédex;