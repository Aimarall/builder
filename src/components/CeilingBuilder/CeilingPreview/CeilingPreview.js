// import CeilingIngredient from "../CeilingIngredient/CeilingIngredient";
// import classes from "./CeilingPreview.module.css";

// const CeilingPreview = ({ ingredients }) => {
//   const result = [];
//   for (const ingredient in ingredients) {
//     for (let i = 0; i < ingredients[ingredient]; i++) {
//       result.push(<CeilingIngredient type={ingredient} />)
//     }
//   }

//   return (
//     <div className={classes.CeilingPreview}>
//       <div className={classes.sauce}>
//         {result}
//       </div>
//     </div>
//   );
// }

// export default CeilingPreview;









import CeilingIngredient from "../CeilingIngredient/CeilingIngredient";
import classes from "./CeilingPreview.module.css";
import ingredientsBackground from "../../../images/logo2.svg";

const CeilingPreview = ({ ingredients }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<CeilingIngredient type={ingredient} />)
    }
  }

  return (
    <div className={classes.CeilingPreview}>
      <div
        className={classes.ingredients}
        style={{ backgroundImage: `url(${ingredientsBackground})` }}>
        {result}
      </div>
    </div>
  );
}

export default CeilingPreview;










