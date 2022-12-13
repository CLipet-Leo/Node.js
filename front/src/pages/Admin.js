import Menu from "../components/nav";
import { useState, useEffect, } from "react";
import { getAll,addToPokemon,addToPokedex,delPokemon } from "../api/pokemon";
import { Button} from '@mui/material';
import { useForm } from "react-hook-form";



function Admin(props) {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        addToPokemon(data)
    }
    const [pokemons, setPokedex] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
        const pokemonsFetched = getAll();
        pokemonsFetched
            .then(result => setPokedex(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, [count]);

  return ( <>
    <Menu />
    <h1>Gestion des pokémons</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Pokemon name" />
        <input {...register("img")} placeholder="Img" />
        <button type="submit">Ajouter</button>
    </form>
    <div class="flex">
    {pokemons.map((pokemon, key) => {
        return <div key={key} className="bloc-pokemon">
        <h2>{pokemon.name}</h2>
        <h3>{pokemon.types}</h3>
        <img class="avatar" src={pokemon.img} alt=""/><br />
        {/* <img class="types" src={types.img} /> */}
        <button class="ball" onClick={()=>addToPokedex(pokemon)}><img class="ball" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFgeicwnl_0nvjfll3VVaEME0c_SjmsPL0bgU2wiSttw&s"} alt=""/> </button>
        <br/>
        <Button variant="contained" color="error" onClick={()=>{delPokemon(pokemon);setCount(count+1)}}>Supprimer !</Button>
        </div>
    })}
    </div>
    </>
  );
}

export default Admin;