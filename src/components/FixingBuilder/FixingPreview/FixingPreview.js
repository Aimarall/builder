
// import PizzaIngredient from "../PizzaIngredient/PizzaIngredient";

// import classes from "./PizzaPreview.module.css";
// import ingredientsBackground from "../../../images/cheese.svg";

// const PizzaPreview = ({ ingredients, price }) => {
//   const result = [];
//   for (const ingredient in ingredients) {
//     const example = [];
//     for (let i = 0; i < ingredients[ingredient]; i++) {
//       example.push(<PizzaIngredient key={ingredient + i} type={ingredient} />)
//     }
//     result.push(<div>{example}</div>)
//   }

//   return (
//     <div className={classes.PizzaPreview}>
//       <div className={classes.pizza}>
//         <div
//           className={classes.ingredients}
//           style={{ backgroundImage: `url(${ingredientsBackground})` }}>
//           {result}
//         </div>
//       </div>
//       <div className={classes.price}>{price.toFixed(1)} som</div>
//     </div>
//   );
// }

// export default PizzaPreview;























// import CeilingIngredient from "../CeilingIngredient/CeilingIngredient";

// import classes from "./CeilingPreview.module.css";
// import ingredientsBackground from "../../../images/cheese.svg";

// const CeilingPreview = ({ ingredients, price }) => {
//   const result = [];
//   for (const ingredient in ingredients) {
//     for (let i = 0; i < ingredients[ingredient]; i++) {
//       result.push(<CeilingIngredient key={ingredient + i} type={ingredient} />)
//     }
//   }

//   return (
//     <div className={classes.CeilingPreview}>
//       <div className={classes.pizza}>
//         <div
//           className={classes.ingredients}
//           style={{ backgroundImage: `url(${ingredientsBackground})` }}>
//           {result}
//         </div>
//       </div>
//       <div className={classes.price}>{price.toFixed(1)} som</div>
//     </div>
//   );
// }

// export default CeilingPreview;

import FixingIngredient from "../FixingIngredient/FixingIngredient";

import classes from "./FixingPreview.module.css";
import ingredientsBackground from "../../../images/cheese.svg";

const FixingPreview = ({ ingredients, price }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<FixingIngredient key={ingredient + i} type={ingredient} />)
    }
  }

  return (
    <div className={classes.FixingPreview}>
      <div className={classes.fixing}>  {/*  pizza */}
        <div
          className={classes.ingredients}
          style={{ backgroundImage: `url(${ingredientsBackground})` }}>
          {result}
        </div>
      </div>
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}

export default FixingPreview;
