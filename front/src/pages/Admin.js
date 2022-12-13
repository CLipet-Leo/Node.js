import Menu from "../components/nav";
import { useState, useEffect, } from "react";
import { addToPokemon } from "../api/pokemon";
// import { Box,TextField,Button} from '@mui/material';
import { useForm } from "react-hook-form";

// const [pokemons, setPokemons] = useState([]);
//       useEffect(() => { 
//         const pokemonsFetched = addToPokemon();
//         pokemonsFetched
//           .then(result => setPokemons(result))
//           .catch(error => console.error("Erreur avec notre API :", error.message));
//       }, []);

function Admin(props) {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
      console.log(data);
      addToPokemon(data)
    }

  return ( <>
    <Menu />
    <h1>Gestion des pokémons</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Pokemon name" />
        <input {...register("img")} placeholder="Img" />
        <button type="submit">Ajouter</button>
      </form>
    </>
  );
}

export default Admin;