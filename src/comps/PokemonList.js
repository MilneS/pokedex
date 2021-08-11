import classes from "./PokemonList.module.css";
import Pokecell from "./Pokecell";

const PokemonList = () => {
  return <section className={classes.pokelist}>
      <Pokecell/>
      <Pokecell/>
      <Pokecell/>
  </section>;
};

export default PokemonList;
