
// import Button from "../../../UI/Button/Button";
// import CeilingIngredient from "../../CeilingIngredient/CeilingIngredient";
// import classes from "./CeilingControl.module.css";

// const CeilingControl = ({ type, add, remove, count }) => {
//   return (
//     <div className={classes.CeilingControl}>
//       <Button onClick={() => add(type)}>+</Button>
//       <div className={classes.ingredient}>
//         <CeilingIngredient type={type} fixed />
//       </div>
//       <Button onClick={() => remove(type)} disabled={!count}>-</Button>
//     </div>
//   );
// }

// export default CeilingControl;

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