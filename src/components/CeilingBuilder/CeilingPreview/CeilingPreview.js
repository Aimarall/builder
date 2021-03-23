import CeilingIngredient from "../CeilingIngredient/CeilingIngredient";
import classes from "./CeilingPreview.module.css";

const CeilingPreview = ({ ingredients }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<CeilingIngredient type={ingredient} />)
    }
  }

  return (
    <div className={classes.CeilingPreview}>
      <div className={classes.sauce}>
        {result}
      </div>
    </div>
  );
}

export default CeilingPreview;

















{/* <CeilingIngredient type="dowels" />
        <CeilingIngredient type="screws" />
        <CeilingIngredient type="nails" />
        <CeilingIngredient type="bolts" />
        <CeilingIngredient type="nuts" />
        <CeilingIngredient type="rivets" />
        <CeilingIngredient type="self-tapping screws" />
        <CeilingIngredient type="growers" />
        <CeilingIngredient type="anchors" />
        <CeilingIngredient type="furniture axles" /> */}