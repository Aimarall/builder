
import classes from "./CeilingBuilder.module.css";
import CeilingPreview from "./CeilingPreview/CeilingPreview";
import CeilingControls from "./CeilingControls/CeilingControls";
import CeilingIngredient from "./CeilingIngredient/CeilingIngredient";

const CeilingBuilder = () => {
  const ingredients = {
    bolt: 2,
    screw: 2,
    washer: 2,
    nail: 2,
    nut: 2,
    dowel: 1,
    ssvvgg: 5,
    ppnngg: 5,
    jjppgg: 5,
    aassdd: 5,
    ffgghh: 5,
  };

  return (
    <div className={classes.CeilingBuilder}>
      <CeilingPreview ingredients={ingredients} />
      <CeilingControls />
      <CeilingIngredient />
    </div>
  );
}

export default CeilingBuilder;