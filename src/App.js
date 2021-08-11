import './App.css';
import PokemonList from './comps/PokemonList';
import Details from './comps/Details';

function App() {

  const clickHandler=(id)=>{
    console.log(id)
  }

  return (
    <div className="App">
      <PokemonList clickHandler={clickHandler} />
      <Details/>
    </div>
  );
}

export default App;
