// import classes from "./CheckoutSummary.module.css";
// import FixingPrevew from "../../FixingBuilder/FixingPrevew/FixingPrevew";
// import Button from "../../UI/Button/Button";

// const CheckoutSummary = ({ cancelCallback }) => {
//   return (
//     <div className={classes.CheckoutSummary}>
//       <div>
//         <FixingPrevew ingredients={{
//           almaz1: 3,
//           amber1: 2,
//           rauchtopaz: 3,
//           rubin1: 2,
//           silver1: 2,
//           zoloto2: 2,
//         }} price={150} />
//       </div>
//       <div>
//         <Button>Checkout</Button>
//         <Button onClick={cancelCallback}>Cancel</Button>
//       </div>
//     </div>
//   );
// }

// export default CheckoutSummary;

import classes from "./CheckoutSummary.module.css";
import FixingPreview from "../../FixingBuilder/FixingPreview/FixingPreview";
import Button from "../../UI/Button/Button";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const CheckoutSummary = ({ submitCallback, cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <FixingPreview ingredients={{
          almaz1: 3,
          amber1: 2,
          rauchtopaz1: 3,
          rubin1: 2,
          silver1: 2,
          zoloto2: 2,
        }} price={150} />
      </div>
      <CheckoutForm
        submitCallback={submitCallback}
        cancelCallback={cancelCallback} />
    </div>
  );
}

export default CheckoutSummary;