import React from "react";
import classes from "./FixingIngredient.module.css";


import zoloto2Background from "../../../images/zoloto2.svg";
import silver1Background from "../../../images/silver1.svg";
import almaz1Background from "../../../images/almaz1.svg";
import rubin1Background from "../../../images/rubin1.svg";
import amber1Background from "../../../images/amber1.svg";
import rauchtopaz1Background  from "../../../images/rauchtopaz1.svg";


const FixingIngredient = ({ type, fixed }) => {
  const types = { 
    zoloto2: { backgroundImage: `url(${zoloto2Background})`, width: "55px", height: "55px" },
    silver1: { backgroundImage: `url(${silver1Background})`, width: "44px", height: "44px" },
    almaz1: { backgroundImage: `url(${almaz1Background})`, width: "48px", height: "48px" },
    rubin1: { backgroundImage: `url(${rubin1Background})`, width: "45px", height: "45px" },
    amber1: { backgroundImage: `url(${amber1Background})`, width: "50px", height: "50px" },
    rauchtopaz1: { backgroundImage: `url(${rauchtopaz1Background})`, width: "70px", height: "70px" },

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








