// import classes from "./CeilingPreview.module.css";


// const CeilingPreview = () => {
//   return (
//     <div className={classes.CeilingPreview}>
//       <div className={classes.sauce}>
//         <CeilingIngredient type="tomato" />
//         <CeilingIngredient type="salami" />
//         <CeilingIngredient type="olive" />
//         <CeilingIngredient type="mushroom" />

//       </div>
//     </div>

//   );
// }

// export default CeilingPreview;

import CeilingIngredient from "../CeilingIngredient/CeilingIngredient";
import classes from "./CeilingPreview.module.css";

const CeilingPreview = () => {
  return (
    <div className={classes.CeilingPreview}>
      <div className={classes.sauce}>
        <CeilingIngredient type="dowels" />
        <CeilingIngredient type="screws" />
        <CeilingIngredient type="nails" />
        <CeilingIngredient type="bolts" />
        <CeilingIngredient type="nuts" />
        <CeilingIngredient type="rivets" />
        <CeilingIngredient type="self-tapping screws" />
        <CeilingIngredient type="growers" />
        <CeilingIngredient type="anchors" />
        <CeilingIngredient type="furniture axles" />
      </div>

    </div>
  );
}

export default CeilingPreview;
