import { Link } from "react-router-dom"

function Menu(){
    return <nav>
        <ul>
            <li><Link to="../">Acceuil</Link></li>
            <li><Link to="../pokedex">Pokédex</Link></li>
            <li><Link to="../pokemons">Pokémons</Link></li>
            <li><Link to="../admin">Page de gestion</Link></li>
        </ul>
    </nav>
}

export default Menu;