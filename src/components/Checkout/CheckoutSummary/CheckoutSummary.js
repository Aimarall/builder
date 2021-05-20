import classes from "./CheckoutSummary.module.css";
import FixingPreview from "../../FixingBuilder/FixingPreview/FixingPreview";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const CheckoutSummary = ({ submitCallback, cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <FixingPreview ingredients={{
          diamond: 2,
          amber: 2,
          rauchtopaz: 3,
          ruby: 2,
          silver: 2,
          gold: 2,
        }} price={13} />
      </div>
      <CheckoutForm
        submitCallback={submitCallback}
        cancelCallback={cancelCallback} />
    </div>
  );
}

export default CheckoutSummary;