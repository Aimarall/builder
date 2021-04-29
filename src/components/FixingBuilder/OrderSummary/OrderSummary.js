// import classes from "./OrderSummary.module.css";

// const OrderSummary = ({ ingredients, price }) => {
//   const results = Object.keys(ingredients)
//     .map(type => <li>{type}: {ingredients[type]}</li>);

//   return (
//     <div className={classes.OrderSummary}>
//       <ul>
//         {results}
//       </ul>
//       <strong>Total price: {price.toFixed(1)} som</strong>
//     </div>
//   );
// }

// export default OrderSummary;

import classes from "./OrderSummary.module.css";

const OrderSummary = ({ ingredients, price }) => {
  const labels = {
   
    almaz1: "Almaz1",
    amber1: "Amber1",
    rauchtopaz1: "Rauchtopaz1",
    rubin1: "rubin1",
    silver1: "Silver1",
    zoloto2: "Zoloto2",
  }
  const results = Object.keys(ingredients)
    .map(type => <li>{labels[type]}: {ingredients[type]}</li>);

  return (
    <div className={classes.OrderSummary}>
      <h3>Order summary</h3>
      <ul>
        {results}
      </ul>
      <strong>Total price: {price.toFixed(1)} som</strong>
    </div>
  );
}

export default OrderSummary;