import React from "react";
import classes from "./FixingIngredient.module.css";


import goldBackground from "../../../images/gold.svg";
import silverBackground from "../../../images/silver.svg";
import diamondBackground from "../../../images/diamond.svg";
import rubyBackground from "../../../images/ruby.svg";
import amberBackground from "../../../images/amber.svg";
import rauchtopazBackground  from "../../../images/rauchtopaz.svg";


const FixingIngredient = ({ type, fixed }) => {
  const types = { 
    gold: { backgroundImage: `url(${goldBackground})`, width: "55px", height: "55px" },
    silver: { backgroundImage: `url(${silverBackground})`, width: "44px", height: "44px" },
    diamond: { backgroundImage: `url(${diamondBackground})`, width: "48px", height: "48px" },
    ruby: { backgroundImage: `url(${rubyBackground})`, width: "45px", height: "45px" },
    amber: { backgroundImage: `url(${amberBackground})`, width: "50px", height: "50px" },
    rauchtopaz: { backgroundImage: `url(${rauchtopazBackground})`, width: "70px", height: "70px" },

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








