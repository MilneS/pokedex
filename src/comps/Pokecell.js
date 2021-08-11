import classes from "./Pokecell.module.css";
import PokemonList from "./PokemonList";
import pokepics from "./pokemonData/pokepics.png";

const Pokecell = ({ pokeClass }) => {
  const { id, backgroundPosition } = pokeClass;
  const style = { backgroundImage: `url(${pokepics})`, backgroundPosition };
  return <button style={style} className={classes.pokecell}></button>;
};

export default Pokecell;
