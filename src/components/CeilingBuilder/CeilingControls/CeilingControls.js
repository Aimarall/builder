import CeilingIngredient from "../CeilingIngredient/CeilingIngredient";
import classes from "./CeilingControls.module.css";


const CeilingControls = () => {
  return (
    <div className={classes.CeilingControls}>
      <div className={classes.sauce}>
        <CeilingIngredient type="Controls" />

      </div>
    </div>

  );
}

export default CeilingControls;