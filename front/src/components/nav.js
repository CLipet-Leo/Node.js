import { Link } from "react-router-dom"

function Menu(){
    return <nav>
        <ul>
            <li><Link to="../">Acceuil</Link></li>
            <li><Link to="../About">À propos</Link></li>
            <li><Link to="../Dashboard">Liste</Link></li>
        </ul>
    </nav>
}

export default Menu;