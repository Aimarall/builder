
import Button from "../../../UI/Button/Button";
import FixingIngredient from "../../FixingIngredient/FixingIngredient";
import classes from "./FixingControl.module.css";

const FixingControl = ({ type, add, remove, count }) => {
  

  return (
    <div className={classes.FixingControl}>
      <Button onClick={() => add(type)}>+</Button>
      <div className={classes.ingredient}>
        <FixingIngredient type={type} fixed />
      </div>
      <Button onClick={() => remove(type)} disabled={!count}>-</Button>
    </div>
  );
}

export default FixingControl;












// import classes from "./SandwichControl.module.css";
// import Button from "../../../UI/Button/Button";


// const SandwichControl = ({ type, add, remove }) => {
  // const name ={
  //   cheese:"cheese",
  //   tomato:" tomato",
  //   salad:"salad",
  //   meat:"meat",
  //   Bacon:"Bacon",
  //   onions:"onions",
  // }
//   return (
//     <div className={classes.SandwichControl}>
//  <Button onClick={() => add(type)}>+</Button>
//       <div className={classes.ingredient}>
//         {/* <ToysIngredient type={type} fixed /> */}
//         {name[type]}
//       </div>
//       <Button onClick={() => remove(type)}>-</Button>
//     </div>
//   );
// }


// export default SandwichControl;