const [ pokemons, setPokemons ] = useState([]);

//va s'executer seulement au lancement du composant (dep: [])
useEffect(() => {
  // récupérer la liste des users seulement au chargement du composant ! 
  const pokemonsFetched = getAll();
  setPokemons(pokemonsFetched);
},[]);

function Dashboard(props){
    return <h1>Liste des pokémons</h1>,
    <div className="pokemon-list">
    <div class="flex">
      {
        pokemons.map((pokemon,key) =>{
          return <div key={key} className="bloc-pokemon">
            <img className="avatar" src={pokemon.img} />
            <h2>{pokemon.name}</h2>
            <button onClick={()=>addToPokedex(pokemon._id)}>Capturer !</button>
          </div>
        })
      };
     </div>
</div>;
}

export default Dashboard;