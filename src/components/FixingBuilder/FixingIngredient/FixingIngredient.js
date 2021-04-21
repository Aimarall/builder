// import React from "react";
// import classes from "./FixingIngredient.module.css";


// import zoloto2Background from "../../../images/zoloto2.svg";
// import silver2Background from "../../../images/silver2.svg";
// import almaz1Background from "../../../images/almaz1.svg";
// import rubin1Background from "../../../images/rubin1.svg";
// import amber1Background from "../../../images/amber1.svg";

// const FixingIngredient = ({ type, fixed }) => {
//   const types = {
//     zoloto2: { backgroundImage: `url(${zoloto2Background})`, width: "55px", height: "55px" },
//     silver2: { backgroundImage: `url(${silver2Background})`, width: "64px", height: "64px" },
//     almaz1: { backgroundImage: `url(${almaz1Background})`, width: "50px", height: "50px" },
//     rubin1: { backgroundImage: `url(${rubin1Background})`, width: "50px", height: "50px" },
//     amber1: { backgroundImage: `url(${amber1Background})`, width: "50px", height: "50px" },
//   };

//   function getPosition(ingredientWidth) {
//     const pizzaDiameter = 380;
//     const pizzaRadius = pizzaDiameter / 2;
//     const ingredientRadius = parseInt(ingredientWidth) / 2;

//     const ingredientTop = Math.round(Math.random() * pizzaDiameter);
//     const ingredientLeft = Math.round(Math.random() * pizzaDiameter);

//     const distance = Math.sqrt(
//       Math.pow(ingredientTop - pizzaRadius, 2) + Math.pow(ingredientLeft - pizzaRadius, 2)
//     ) + ingredientRadius;

//     return distance < pizzaRadius
//       ? {
//         top: ingredientTop - ingredientRadius,
//         left: ingredientLeft - ingredientRadius
//       }
//       : getPosition(ingredientWidth);
//   }

//   // Get random position for this ingredient.
//   if (!fixed) {
//     const position = getPosition(types[type].width);
//     types[type].top = position.top + "px";
//     types[type].left = position.left + "px";
//   }
//   // Get random rotation for this ingredient.
//   types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

//   return (
//     <div className={classes.FixingIngredient} style={types[type]}></div>
//   );
// }

// export default React.memo(FixingIngredient);




import React from "react";
import classes from "./FixingIngredient.module.css";


import zoloto2Background from "../../../images/zoloto2.svg";
import silver2Background from "../../../images/silver2.svg";
import almaz1Background from "../../../images/almaz1.svg";
import rubin1Background from "../../../images/rubin1.svg";
import amber1Background from "../../../images/amber1.svg";

const FixingIngredient = ({ type, fixed }) => {
  const types = {
    zoloto2: { backgroundImage: `url(${zoloto2Background})`, width: "55px", height: "55px" },
    silver2: { backgroundImage: `url(${silver2Background})`, width: "64px", height: "64px" },
    almaz1: { backgroundImage: `url(${almaz1Background})`, width: "50px", height: "50px" },
    rubin1: { backgroundImage: `url(${rubin1Background})`, width: "50px", height: "50px" },
    amber1: { backgroundImage: `url(${amber1Background})`, width: "50px", height: "50px" },
  };
  function getPosition(ingredientWidth) {
    const fixingDiameter = 360;
    const fixingRadius = fixingDiameter / 2;
    const ingredientRadius = parseInt(ingredientWidth) / 2;

    const ingredientTop = Math.round(Math.random() * fixingDiameter);
    const ingredientLeft = Math.round(Math.random() * fixingDiameter);


    const distance = Math.sqrt(
      Math.pow(ingredientTop - fixingRadius, 2) + Math.pow(ingredientLeft - fixingRadius, 1)
    ) + ingredientRadius;

    return distance < fixingRadius
      ? {
        top: ingredientTop - ingredientRadius,
        left: ingredientLeft - ingredientRadius

      }
      : getPosition(ingredientWidth);
  }

  // Get random position for this ingredient.
  if (!fixed) {
    const position = getPosition(types[type].width);
    types[type].top = position.top + "px";
    types[type].left = position.left + "px";
  }
  // Get random rotation for this ingredient.
  types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return (
    <div className={classes.FixingIngredient} style={types[type]}></div>
  );
}

export default React.memo(FixingIngredient);
