
import React from "react";

import classes from "./FixingIngredient.module.css";
import screw1Background from "../../../images/screw1.svg";

import nail1Background from "../../../images/nail1.svg";
import dowel1Background from "../../../images/dowel1.png";
import nut1Background from "../../../images/nut1.svg";

const FixingIngredient = ({ type, fixed }) => {
  const types = {
    screw1: { backgroundImage: `url(${screw1Background})`, width: "50px", height: "41px" },
    nail1: { backgroundImage: `url(${nail1Background})`, width: "60px", height: "20px" },
    nut1: { backgroundImage: `url(${nut1Background})`, width: "37px", height: "40px" },
    dowel1: { backgroundImage: `url(${dowel1Background})`, width: "30px", height: "30px" },
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