import classes from "./PokemonList.module.css";
import Pokecell from "./Pokecell";
import { pokeClasses } from "./pokemonData/pokeClasses";

const PokemonList = () => {
  const cells = pokeClasses.map((pokeClass) => {
    return <Pokecell key={pokeClass.id} pokeClass={pokeClass} />;
  });
  return (
    <section className={classes.pokelist}>
      {cells}
    </section>
  );
};

export default PokemonList;
