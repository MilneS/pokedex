import './App.css';
import PokemonList from './comps/PokemonList';
import Details from './comps/Details';
import Pokemon from './Pokemon';
import {useState} from 'react';

function App() {
  const [state, setState]= useState({
    pokemon: {}
  })
  const clickHandler=(id)=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
      const pokemons = new Pokemon(data);
      setState({ pokemon: pokemons });
    })
    .catch(err => console.log(err));
  }


  return (
    <>
    <p className="title">Pokédex</p>
    <div className="App">
      <PokemonList clickHandler={clickHandler} />
      <Details pokemon={state.pokemon}/>
    </div>
    </>
  );
}

export default App;
