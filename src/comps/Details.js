import classes from "./Details.module.css";

const Details = () => {
  return (
    <section className={classes.details}>
      <img className={classes.image} alt=''/>
      <div className={classes.wrapper}>
        <h1 className={classes.name}></h1>
        <p className={classes.char}></p>
      </div>
    </section>
  );
};

export default Details;
