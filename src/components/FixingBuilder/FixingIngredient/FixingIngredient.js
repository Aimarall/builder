
import React from "react";
import classes from "./FixingIngredient.module.css";

import izmurud1Background from "../../../images/izmurud1.png";
import zoloto2Background from "../../../images/zoloto2.svg";


const FixingIngredient = ({ type, fixed }) => {
  const types = {
    izmurud1: { backgroundImage: `url(${izmurud1Background})`, width: "50px", height: "41px" },
    zoloto2: { backgroundImage: `url(${zoloto2Background})`, width: "40px", height: "40px" },

  };

  function getPosition(ingredientWidth) {
    const pizzaDiameter = 380;
    const pizzaRadius = pizzaDiameter / 2;
    const ingredientRadius = parseInt(ingredientWidth) / 2;

    const ingredientTop = Math.round(Math.random() * pizzaDiameter);
    const ingredientLeft = Math.round(Math.random() * pizzaDiameter);

    const distance = Math.sqrt(
      Math.pow(ingredientTop - pizzaRadius, 2) + Math.pow(ingredientLeft - pizzaRadius, 2)
    ) + ingredientRadius;

    return distance < pizzaRadius
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