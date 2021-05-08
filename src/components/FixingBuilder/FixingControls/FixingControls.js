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
      <strong>Gems</strong>
      {results}
      <Button disabled={!total} onClick={startOrdering} className="Order">Order</Button>
    </div>
  );
}

export default FixingControls;