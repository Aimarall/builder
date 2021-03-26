// import CeilingIngredient from "../../CeilingIngredient/CeilingIngredient";
// import classes from "./CeilingControl.module.css";


// const CeilingControl = ({ type, count }) => {
//     return (
//         <div className={classes.CeilingControl}>
//             <button className={classes.more}>+</button>
//             <div className={classes.ingredient} />
//             <button className={classes.less}>-</button>
//         </div>

//     );
// }

// export default CeilingControl;














// import CeilingControls from "../../CeilingControls/CeilingControls";
// import classes from "./CeilingControl.module.css";

// const CeilingControl = ({ type, count }) => {
//   return (
//     <div className={classes.PizzaControl}>
//       <button className={classes.more}>+</button>
//       <div className={classes.ingredient}>
//         <CeilingControls type={type} fixed />
//       </div>
//       <button className={classes.less}>-</button>
//     </div>
//   );
// }

// export default CeilingControls;














import CeilingIngredient from "../../CeilingIngredient/CeilingIngredient";
import classes from "./CeilingControl.module.css";

const CeilingControl = ({ type, add, remove }) => {
  return (
    <div className={classes.CeilingControl}>
      <button className={classes.more} onClick={() => add(type)}>+</button>
      <div className={classes.ingredient}>
        <CeilingIngredient type={type} fixed />
      </div>
      <button className={classes.less} onClick={() => remove(type)}>-</button>
    </div>
  );
}

export default CeilingControl;