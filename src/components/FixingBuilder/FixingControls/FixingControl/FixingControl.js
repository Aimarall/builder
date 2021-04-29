import classes from "./FixingControl.module.css";
import Button from "../../../UI/Button/Button";


const FixingControl = ({ type, add, remove, count}) => {
  const name = {
    almaz1: "almaz1",
    amber1: " amber1",
    rubin1: "rubin1",
    silver1: "silver2",
    zoloto2: "zoloto2",
    rauchtopaz1: "rauchtopaz1",
  }
  return (
    <div className={classes.FixingControl}>
      <Button onClick={() => add(type)}>+</Button>
      <div className={classes.ingredient}>
        {/* <ToysIngredient type={type} fixed /> */}
        {name[type]}
      </div>
      <Button onClick={() => remove(type)}  disabled={!count}>-</Button>
    </div>
  );
}


export default FixingControl;
