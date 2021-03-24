// import classes from "./CeilingIngredient.module.css";

// const CeilingIngredient = ({ type }) => {
  
//   return (
//     <div className={classes.CeilingIngredient}>{type}</div>
//   );
// }

// export default CeilingIngredient;

















import classes from "./CeilingIngredient.module.css";

import boltBackground from "../../../images/bolt.svg";
import dowelBackground from "../../../images/dowel.svg";
import nailBackground from "../../../images/nail.svg";
import nutBackground from "../../../images/nut.svg";
import screwBackground from "../../../images/screw.svg";
import washerBackground from "../../../images/washer.svg";

const CeilingIngredient = ({ type }) => {
  const types = {
    bolt: { backgroundImage: `url(${boltBackground})`, width: "35px", height: "35px" },
    dowel: { backgroundImage: `url(${dowelBackground})`, width: "35px", height: "35px" },
    nail: { backgroundImage: `url(${nailBackground})`, width: "10px", height: "10px" },
    nut: { backgroundImage: `url(${nutBackground})`, width: "10px", height: "10px" },
    screw: { backgroundImage: `url(${screwBackground})`, width: "20px", height: "20px" },
    washer: { backgroundImage: `url(${washerBackground})`, width: "40px", height: "40px" },
  };

  function getPosition(ingredientWidth) {
    const ceilingDiameter = 380;
    const ceilingRadius = ceilingDiameter / 2;
    const ingredientRadius = parseInt(ingredientWidth) / 2;

    const ingredientTop = Math.round(Math.random() * ceilingDiameter);
    const ingredientLeft = Math.round(Math.random() * ceilingDiameter);

    const distance = Math.sqrt(
      Math.pow(ingredientTop - ceilingRadius, 2) + Math.pow(ingredientLeft - ceilingRadius, 2)
    ) + ingredientRadius;

    return distance < ceilingRadius
      ? {
        top: ingredientTop - ingredientRadius,
        left: ingredientLeft - ingredientRadius
      }
      : getPosition(ingredientWidth);
  }

  // Get random position for this ingredient.
  const position = getPosition(types[type].width);
  types[type].top = position.top + "px";
  types[type].left = position.left + "px";
  // Get random rotation for this ingredient.
  types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return (
    <div className={classes.CeilingIngredient} style={types[type]}></div>
  );
}

export default CeilingIngredient;