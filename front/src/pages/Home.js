import Menu from "../components/nav";
import "../App.css";


function Home(props) {
    return (<>
        <Menu />
        <h1>Accueil</h1>
        <div className="intro">
            <img className="accueil" src="https://w.wallhaven.cc/full/lm/wallhaven-lmv98r.jpg" alt="pokemon starter" /><br />
            <p>
                Pokémon, connue au Japon sous le nom de Pocket Monsters est une franchise créée par Satoshi Tajiri en 1996, présente en particulier en jeu vidéo, dans des séries éditées par Nintendo. Selon les statistiques de Nintendo en 2010, les jeux Pokémon se sont vendus à environ 250 millions d’unités. Le jeu vidéo Pokémon Rouge et Bleu s’est vendu à plus de 30 millions d’exemplaires, ce qui en fait un record des ventes dans l’histoire du jeu vidéo.

                La franchise est également exploitée sous forme d'anime, de mangas, et de jeux de cartes à collectionner. Dans la série animée homonyme, le personnage principal, Sacha, voyage à travers diverses régions fictives dans le but d’attraper de nouvelles sortes de monstres éponymes, un concept qu’on retrouve également dans les jeux vidéo de la franchise. Pokémon a eu un impact culturel très important dans les pays où il a été introduit, dont le Japon, les États-Unis, le Canada, la France et d'autres pays européens.
            </p>
            <img className="accueil" src="https://external-preview.redd.it/cGnb85Px8AJL1bQzR-XMkHkt3HtPVymdHTsK0x-c3SE.jpg?auto=webp&s=d86c43d6d719fd9d18427fa71b6d1ab5502de0a7" alt="pokemon angry magicarpe" /><br />
            <p>
                Magicarpe est redoutable, cette créature des mers capable de déplacer des montagnes, peut sauter des hauteurs démentielles et est capable d'affronter et vaincre le dieu des pokémons Arceus.<br /> Long Live Magicarpe.
            </p>
        </div>
    </>
    );
}


export default Home;