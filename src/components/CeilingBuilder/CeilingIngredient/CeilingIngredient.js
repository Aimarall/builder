import classes from "./CeilingIngredient.module.css";

const CeilingIngredient = ({ type }) => {
  
  return (
    <div className={classes.CeilingIngredient}>{type}</div>
  );
}

export default CeilingIngredient;







// import classes from "./CeilingIngredient.module.css";

// import salamiBackground from "../../../images/salami.svg";
// import tomatoBackground from "../../../images/tomato.svg";
// import blackOliveBackground from "../../../images/blackOlive.svg";
// import greenOliveBackground from "../../../images/greenOlive.svg";
// import redPepperBackground from "../../../images/redPepper.svg";
// import yellowPepperBackground from "../../../images/yellowPepper.svg";

// const CeilingIngredient = ({ type }) => {
//   const types = {
//     salami: { backgroundImage: `url(${salamiBackground})`, width: "35px", height: "35px" },
//     tomato: { backgroundImage: `url(${tomatoBackground})`, width: "35px", height: "35px" },
//     blackOlive: { backgroundImage: `url(${blackOliveBackground})`, width: "10px", height: "10px" },
//     greenOlive: { backgroundImage: `url(${greenOliveBackground})`, width: "10px", height: "10px" },
//     redPepper: { backgroundImage: `url(${redPepperBackground})`, width: "20px", height: "20px" },
//     yellowPepper: { backgroundImage: `url(${yellowPepperBackground})`, width: "40px", height: "40px" },
//   };

//   return (
//     <div className={classes.CeilingIngredient} style={types[type]}></div>
//   );
// }

// export default CeilingIngredient;