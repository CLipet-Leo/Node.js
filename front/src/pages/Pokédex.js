import Menu from "../components/nav";
import { useState, useEffect, } from "react";
import { getPokedex,delPokedex } from "../api/pokemon.js";

function Pokédex(props) {
    const [pokedex, setPokedex] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const pokedexFetched = getPokedex();
        pokedexFetched
            .then(result => setPokedex(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, [count]);

    return <>
        <Menu />
        <h1>Mon pokédex</h1>
            <div class="flex">
                {pokedex.map((pokedex, key) => {
                    return <div key={key} className="bloc-pokemon">
                        <h2>{pokedex.name}</h2>
                        <h3>{pokedex.types}</h3>
                        <img className="avatar" src={pokedex.img} alt=""/><br />
                        <button onClick={()=>{delPokedex(pokedex);setCount(count+1)}}>Supprimer !</button>
                    </div>
                })}
            </div>
        <br />
    </>;
}

export default Pokédex;