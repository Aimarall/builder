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
    almaz1: 3,
    amber1: 2,
    rauchtopaz: 3,
    rubin1: 2,
    silver1: 2,
    zoloto2: 2,

    almaz1: "Almaz",
    amber1: "Amber",
    rauchtopaz1: "Rauchtopaz",
    rubin1: "Rubin",
    silver1: "Silver",
    zoloto2: "Zoloto",
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