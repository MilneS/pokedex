import './App.css';
import PokemonList from './comps/PokemonList';
import Details from './comps/Details';
import Pokemon from './Pokemon';

function App() {

  const clickHandler=(id)=>{
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
      const pokemon = new Pokemon(data);
      console.log(pokemon);
    })
    .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <PokemonList clickHandler={clickHandler} />
      <Details/>
    </div>
  );
}

export default App;
