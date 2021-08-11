import classes from "./Details.module.css";

const Details = ({pokemon}) => {
  const { id, name, image, type } = pokemon;
  return (
    <section className={classes.details}>
      {image ? <img src={image} className={classes.image} alt='pokeimage'/> : <div className={classes.image}/>
}
      <div className={classes.wrapper}>
        <h1 className={classes.name}>ID: {id} {name}</h1>
        <p className={classes.char}>Type: {type}</p>
      </div>
    </section>
  );
};

export default Details;
