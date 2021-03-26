// import CeilingControl from "./CeilingControl/CeilingControl";
// import classes from "./PizzaControls.module.css";

// const CeilingControls = ({ ingredients }) => {
//   const results = [];
//   for (const ingredient in ingredients) {
//     results.push(<PizzaControl type={ingredient} />)
//   }

//   return (
//     <div className={classes.CeilingControls}>
//       {results}
//     </div>
//   );
// }

// export default CeilingControls;






// import classes from "./CeilingControls.module.css";


// const CeilingControls = (ingredients) => {
//   const results = [];
//   for (const ingredient in ingredients) {
//     results.push(<CeilingControl type={ingredient} />)
//   }

//   return (
//     <div className={classes.CeilingControls}>
//       {results}
//     </div>
//   );


// }

// export default CeilingControls;












// import CeilingIngredient from "../CeilingIngredient/CeilingIngredient";
// import classes from "./CeilingControls.module.css";


// const CeilingControls = (ingredients) => {
//   return (
//     <div className={classes.CeilingControls}>
//       <div className={classes.sauce}>
//         <CeilingIngredient type="Controls" />

//       </div>

//   const results = [];
//     for (const ingredient in ingredients) {
//         results.push(<CeilingControls type={ingredient} />)
//       }
    
//   );
//   return (
//     <div className={classes.CeilingControls}>
//       {results}
//     </div>
//   );
// }

// export default CeilingControls;



















import CeilingControl from "./CeilingControl/CeilingControl";
import classes from "./CeilingControls.module.css";

const CeilingControls = ({ ingredients, addIngredient, removeIngredient }) => {
  const results = [];
  for (const ingredient in ingredients) {
    results.push(<CeilingControl
        key={ingredient}
        add={addIngredient}
        remove={removeIngredient}
        type={ingredient} />)
  }

  return (
    <div className={classes.CeilingControls}>
      <strong>Ingredients</strong>
      {results}
    </div>
  );
}

export default CeilingControls;