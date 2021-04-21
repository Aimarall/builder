
import FixingIngredient from "../FixingIngredient/FixingIngredient";
import classes from "./FixingPreview.module.css";
// import ingredientsBackground from "../../../images/cheese.svg";


const FixingPreview = ({ ingredients, price }) => {
  const result = [];
  for (const ingredient in ingredients) {
    const example = [];
    for (let i = 0; i < ingredients[ingredient]; i++) {
      example.push(<FixingIngredient key={ingredient + i} type={ingredient} />)
    }
    result.push(<div>{example}</div>)
  }


  return (
    <div className={classes.FixingPreview}>
      <div className={classes.fixing}>
        <div
          className={classes.ingredients}
         >
          {result}
        </div>
      </div>
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}

export default FixingPreview;


