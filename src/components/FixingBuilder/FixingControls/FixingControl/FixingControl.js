import classes from "./FixingControl.module.css";
import Button from "../../../UI/Button/Button";
import { useDispatch } from "react-redux";


const FixingControl = ({ type, count }) => {
  const dispatch = useDispatch();
  const names = {
    amber: " amber",
    silver: "silver",
    gold: "gold",
    rauchtopaz: "rauchtopaz",
    diamond: "diamond",
    ruby: "ruby",
  }

  return (
    <div className={classes.FixingControl}>
      <div className={classes.Example}>
        <Button className="order" onClick={() => dispatch({ type: "ADD_INGREDIENT", ingredient: type })}>+</Button>

        <div className={classes.ingredient}>
          {names[type]}
        </div>

        <Button className="order" onClick={() => dispatch({ type: "REMOVE_INGREDIENT", ingredient: type })} disabled={!count}>-</Button>
      </div>
    </div>
  );
}

export default FixingControl;





