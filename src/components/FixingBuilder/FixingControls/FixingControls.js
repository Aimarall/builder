
// import Button from "../../UI/Button/Button";
// import FixingControl from "./FixingControl/FixingControl";
// import classes from "./FixingControls.module.css";




// const FixingControls = ({
//   ingredients,
//   addIngredient,
//   removeIngredient,
//   startOrdering
// })


// => 

// {
//   const results = [];
//   let total = 0;
//   for (const ingredient in ingredients) {
//     // Add ingredient number to totals number
//     total += ingredients[ingredient];
//     // Render pizza control for this ingredient
//     results.push(<FixingControl
//         key={ingredient}
//         add={addIngredient}
//         remove={removeIngredient}
//         count={ingredients[ingredient]}
//         type={ingredient} />)
//   }

//   return (
//     <div className={classes.FixingControls}>
//       <strong>Gems</strong>
//       {results}
//       <Button disabled={!total} onClick={startOrdering}>Order</Button>
//     </div>
//   );
// }

// export default FixingControls;



import Button from "../../UI/Button/Button";
import FixingControl from "./FixingControl/FixingControl";
import classes from "./FixingControls.module.css";

const FixingControls = ({
  ingredients,
  addIngredient,
  removeIngredient,
  startOrdering
}) =>

{
  const results = [];
  let total = 0;
  for (const ingredient in ingredients) {
   
    total += ingredients[ingredient];
    
    results.push(<FixingControl
      key={ingredient}
      add={addIngredient}
      remove={removeIngredient}
      count={ingredients[ingredient]}
      type={ingredient} />)
  }

  return (
    <div className={classes.FixingControls}>
      <strong>Gems</strong>
      {results}
      <Button disabled={!total} onClick={startOrdering}>Order</Button>
    </div>
  );
}

export default FixingControls;