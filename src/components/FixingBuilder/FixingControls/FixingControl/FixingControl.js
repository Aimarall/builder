import classes from "./FixingControl.module.css";
import Button from "../../../UI/Button/Button";
import { useDispatch } from "react-redux";


const FixingControl = ({ type, count }) => {
  const dispatch = useDispatch();
  const name = {
    diamond: "diamond",
    amber: " amber",
    ruby: "ruby",
    silver: "silver",
    gold: "gold",
    rauchtopaz: "rauchtopaz",
  }
  return (
    <div className={classes.FixingControl}>

      <Button onClick={() => dispatch({ type: "ADD_INGREDIENT", ingredient: type })}>+</Button>

      <div className={classes.ingredient}>
        {name[type]}
      </div>

      <Button onClick={() => dispatch({ type: "REMOVE_INGREDIENT", ingredient: type })} disabled={!count}>-</Button>

    </div>
  );
}


export default FixingControl;
