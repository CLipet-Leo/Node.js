import Menu from "../components/nav";
import { useState, useEffect, } from "react";
import { getAll, addToPokemon, addToPokedex, delPokemon, updatePokemon } from "../api/pokemon";
import { Button, Box, FormControl, OutlinedInput, InputLabel } from '@mui/material';
import { useForm } from "react-hook-form";
import {Delete} from '@mui/icons-material'


function Admin(props) {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        addToPokemon(data)
    }
    const upSubmit = (data) => {
        console.log(data);
        updatePokemon(data)
    }
    const [pokemons, setPokedex] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
        const pokemonsFetched = getAll();
        pokemonsFetched
            .then(result => setPokedex(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, [count]);

    return (<>
        <Menu />
        <h1>Gestion des pokémons</h1>
        <h2>Ajouter pokémon</h2>
        <Box onSubmit={handleSubmit(onSubmit)}
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >
            <FormControl color="warning">
                <InputLabel htmlFor="component-outlined">Nom du pokémon</InputLabel>
                <OutlinedInput {...register("name")}
                    id="component-outlined"
                    label="Nom du pokémon"
                />
            </FormControl>
            <FormControl color="warning">
                <InputLabel htmlFor="component-outlined">Image URL</InputLabel>
                <OutlinedInput {...register("img")}
                    id="component-outlined"
                    label="Image URL"
                />
            </FormControl><br/>
            <Button variant="outlined" color="warning" type="submit">Ajouter</Button>
        </Box>
        <h2>Modifier pokémon</h2>
        <Box onSubmit={handleSubmit(upSubmit)}
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >
            <FormControl color="warning">
                <InputLabel htmlFor="component-outlined">Nom du pokémon</InputLabel>
                <OutlinedInput {...register("prevname")}
                    id="component-outlined"
                    label="Nom du pokémon"
                />
            </FormControl>
            <FormControl color="warning">
                <InputLabel htmlFor="component-outlined">Nouveau nom</InputLabel>
                <OutlinedInput {...register("newname")}
                    id="component-outlined"
                    label="Nouveau nom"
                />
            </FormControl><br/>
            <Button variant="outlined" color="warning" type="submit">Modifier</Button>
        </Box>
        <div class="flex">
            {pokemons.map((pokemon, key) => {
                return <div key={key} className="bloc-pokemon">
                    <h2>{pokemon.name}</h2>
                    {/* <h3>{pokemon.types}</h3> */}
                    <img class="avatar" src={pokemon.img} alt="" /><br />
                    {/* <img class="types" src={types.img} /> */}
                    <button class="ball" onClick={() => addToPokedex(pokemon)}><img class="ball" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFgeicwnl_0nvjfll3VVaEME0c_SjmsPL0bgU2wiSttw&s"} alt="" /> </button>
                    <br />
                    <Button variant="contained" color="error" startIcon={<Delete />} onClick={() => { delPokemon(pokemon); setCount(count + 1) }}>Supprimer !</Button>
                </div>
            })}
        </div>
    </>
    );
}

export default Admin;