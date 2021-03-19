import classes from "./CeilingBuilder.module.css";
import CeilingPreview from "./CeilingPreview/CeilingPreview";
import CeilingControls from "./CeilingControls/CeilingControls";

const CeilingBuilder = () => {
  return (
    <div className={classes.CeilingBuilder}>
      <CeilingPreview />
      <CeilingControls />
    </div>
  );
}

export default CeilingBuilder;