import classes from "./CeilingIngredient.module.css";

const CeilingIngredient = ({ type }) => {
  return (
    <div className={classes.CeilingIngredient}>{type}</div>
  );
}

export default CeilingIngredient;


