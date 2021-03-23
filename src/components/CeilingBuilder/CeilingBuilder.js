import classes from "./CeilingBuilder.module.css";
import CeilingPreview from "./CeilingPreview/CeilingPreview";
import CeilingControls from "./CeilingControls/CeilingControls";
import CeilingIngredient from "./CeilingIngredient/CeilingIngredient";

const CeilingBuilder = () => {
  const ingredients = {
    dowels: 5,
    screws: 16,
    nails: 8,
    bolts: 2,
    nuts: 3,
    growers: 5,
    rivets: 5,
    anchors: 3,
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



// import classes from "./PizzaBuilder.module.css";
// import PizzaPreview from "./PizzaPreview/PizzaPreview";
// import PizzaControls from "./PizzaControls/PizzaControls";

// const PizzaBuilder = () => {
//   const ingredients = {
//     tomato: 10,
//     salami: 20,
//     greenOlive: 10,
//     blackOlive: 10,
//     redPepper: 10,
//     yellowPepper: 5,
//   };

//   return (
//     <div className={classes.PizzaBuilder}>
//       <PizzaPreview ingredients={ingredients} />
//       <PizzaControls />
//     </div>
//   );
// }

// export default PizzaBuilder;