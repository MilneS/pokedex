import classes from "./Pokecell.module.css";
import PokemonList from "./PokemonList";
import pokepics from "./pokemonData/pokepics.png";

const Pokecell = ({ pokeClass, clickHandler }) => {
  const { id, backgroundPosition } = pokeClass;
  const style = { backgroundImage: `url(${pokepics})`, backgroundPosition };
  return <button onClick={()=>clickHandler(id)} style={style} className={classes.pokecell}></button>;
};

export default Pokecell;
