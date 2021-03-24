// import classes from "./CeilingBuilder.module.css";
// import CeilingPreview from "./CeilingPreview/CeilingPreview";
// import CeilingControls from "./CeilingControls/CeilingControls";
// import CeilingIngredient from "./CeilingIngredient/CeilingIngredient";

// const CeilingBuilder = () => {
//   const ingredients = {
//     dowels: 5,
//     screws: 16,
//     nails: 8,
//     bolts: 2,
//     nuts: 3,
//     growers: 5,
//     rivets: 5,
//     anchors: 3,
//   };

//   return (
//     <div className={classes.CeilingBuilder}>
//       <CeilingPreview ingredients={ingredients}/>
//       <CeilingControls />
//       <CeilingIngredient />
//     </div>
//   );
// }

// export default CeilingBuilder;







import classes from "./CeilingBuilder.module.css";
import CeilingPreview from "./CeilingPreview/CeilingPreview";
import CeilingControls from "./CeilingControls/CeilingControls";
import CeilingIngredient from "./CeilingIngredient/CeilingIngredient";

const CeilingBuilder = () => {
  const ingredients = {
    tomato: 20,
    salami: 20,
    greenOlive: 20,
    blackOlive: 20,
    redPepper: 20,
    yellowPepper: 15,
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