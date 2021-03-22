import classes from "./CeilingBuilder.module.css";
import CeilingPreview from "./CeilingPreview/CeilingPreview";
import CeilingControls from "./CeilingControls/CeilingControls";
import CeilingIngredient from "./CeilingIngredient/CeilingIngredient";

const CeilingBuilder = () => {
  return (
    <div className={classes.CeilingBuilder}>
      <CeilingPreview />
      <CeilingControls />
      <CeilingIngredient />
    </div>
  );
}

export default CeilingBuilder;