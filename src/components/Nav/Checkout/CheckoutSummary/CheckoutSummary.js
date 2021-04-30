// import classes from "./CheckoutSummary.module.css";
// import FixingPreview from "../../FixingBuilder/FixingPreview/FixingPreview";
// import Button from "../../UI/Button/Button";
// import CheckoutForm from "./CheckoutForm/CheckoutForm";

// const CheckoutSummary = ({ submitCallback, cancelCallback }) => {
//   return (
//     <div className={classes.CheckoutSummary}>
//       <div>
//         <FixingPreview ingredients={{
//           almaz1: 3,
//           amber1: 2,
//           rauchtopaz1: 3,
//           rubin1: 2,
//           silver1: 2,
//           zoloto2: 2,
//         }} price={150} />
//       </div>
//       <CheckoutForm
//         submitCallback={submitCallback}
//         cancelCallback={cancelCallback} />
//     </div>
//   );
// }

// export default CheckoutSummary;


import classes from "./CheckoutSummary.module.css";
import PizzaPreview from "../../PizzaBuilder/PizzaPreview/PizzaPreview";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const CheckoutSummary = ({ submitCallback, cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <PizzaPreview ingredients={{
          tomato: 5, 
          salami: 10,
          greenOlive: 50,
        }} price={150} />
      </div>
      <CheckoutForm
        submitCallback={submitCallback}
        cancelCallback={cancelCallback} />
    </div>
  );
}
 
export default CheckoutSummary;