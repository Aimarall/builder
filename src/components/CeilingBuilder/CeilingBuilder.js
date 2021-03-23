import classes from "./CeilingBuilder.module.css";
import CeilingPreview from "./CeilingPreview/CeilingPreview";
import CeilingControls from "./CeilingControls/CeilingControls";
import CeilingIngredient from "./CeilingIngredient/CeilingIngredient";

const CeilingBuilder = () => {
  const ingredients = {
    dowels: 5,
    screws: 6,
    nails: 8,
  };

  return (
    <div className={classes.CeilingBuilder}>
      <CeilingPreview ingredients={ingredients}/>
      <CeilingControls />
      <CeilingIngredient />
    </div>
  );
}

export default CeilingBuilder;