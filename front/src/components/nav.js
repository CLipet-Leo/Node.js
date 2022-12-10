import { Link } from "react-router-dom"

function Menu(){
    return <nav>
        <ul>
            <li><Link to="../">Acceuil</Link></li>
            <li><Link to="../About">Pokédex</Link></li>
            <li><Link to="../Dashboard">Pokémons</Link></li>
        </ul>
    </nav>
}

export default Menu;