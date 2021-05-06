import FixingIngredient from "../FixingIngredient/FixingIngredient";
import classes from "./FixingPreview.module.css";
import ingredientsBackground from "../../../images/cheese4.jpg";


const FixingPreview = ({ ingredients, price }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<FixingIngredient key={ingredient + i} type={ingredient} />)
    }
  }

  return (
    <div className={classes.FixingPreview}>
      <div className={classes.fixing}>
        <div
          className={classes.ingredients}
          style={{ backgroundImage: `url(${ingredientsBackground})` }}>
          {result}
        </div>
      </div>
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}

export default FixingPreview;