import Button from "../../UI/Button/Button";
import FixingControl from "./FixingControl/FixingControl";
import classes from "./FixingControls.module.css";

const FixingControls = ({
  ingredients,
  startOrdering
}) => {
  const results = [];
  let total = 0;
  for (const ingredient in ingredients) {
    // Add ingredient number to totals number
    total += ingredients[ingredient];
    // Render fixiing control for this ingredient
    results.push(<FixingControl
      key={ingredient}
      count={ingredients[ingredient]}
      type={ingredient} />)
  }

  return (
    <div className={classes.FixingControls}>
      <div className={classes.strong}>
        <strong>Gems</strong>
      </div>

      {results}
      
      <div className={classes.ControlButton} >
        <Button disabled={!total} onClick={startOrdering} >Order</Button>
      </div>
    </div>
  );
}

export default FixingControls;