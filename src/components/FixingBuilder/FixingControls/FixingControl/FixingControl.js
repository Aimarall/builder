
// import Button from "../../../UI/Button/Button";
// import FixingIngredient from "../../FixingIngredient/FixingIngredient";
// import classes from "./FixingControl.module.css";

// const FixingControl = ({ type, add, remove, count }) => {
  

//   return (
//     <div className={classes.FixingControl}>
//       <Button onClick={() => add(type)}>+</Button>
//       <div className={classes.ingredient}>
//         <FixingIngredient type={type} fixed />
//       </div>
//       <Button onClick={() => remove(type)} disabled={!count}>-</Button>
//     </div>
//   );
// }

// export default FixingControl;








import classes from "./FixingControl.module.css";
import Button from "../../../UI/Button/Button";


const FixingControl = ({ type, add, remove }) => {
  const name = {
    almaz1:"almaz1",
    amber1:" amber1",
    rubin1:"rubin1",
    silver2:"silver2",
    zoloto2:"zoloto2",
   

  }
  return (
    <div className={classes.FixingControl}>
 <Button onClick={() => add(type)}>+</Button>
      <div className={classes.ingredient}>
        {/* <ToysIngredient type={type} fixed /> */}
        {name[type]}
      </div>
      <Button onClick={() => remove(type)}>-</Button>
    </div>
  );
}

  
export default FixingControl;