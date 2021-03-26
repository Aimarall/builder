// import CeilingPreview from "./CeilingPreview/CeilingPreview";
// import CeilingControls from "./CeilingControls/CeilingControls";
// import CeilingIngredient from "./CeilingIngredient/CeilingIngredient";

// import classes from "./CeilingBuilder.module.css";
// import { useState } from "react";

// const CeilingBuilder = () => {
//   const [ingredients, setIngredients] = useState({
//     ssvvgg: 5,
//     ppnngg: 5,
//     jjppgg: 5,
//     aassdd: 5,
//     ffgghh: 5,
//   });

//   return (
//     <div className={classes.CeilingBuilder}>
//       <CeilingPreview ingredients={ingredients} />
//       <CeilingControls />
//       <CeilingIngredient />
//     </div>
//   );
// }

// export default CeilingBuilder;











import CeilingPreview from "./CeilingPreview/CeilingPreview";
import CeilingControls from "./CeilingControls/CeilingControls";

import classes from "./CeilingBuilder.module.css";
import { useState } from "react";

const CeilingBuilder = () => {
  const [ingredients, setIngredients] = useState({
    ssvvgg: 5,
    ppnngg: 5,
    jjppgg: 5,
    aassdd: 5,
    ffgghh: 5,
  });

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]--;
    setIngredients(newIngredients);
  }

  return (
    <div className={classes.CeilingBuilder}>
      <CeilingPreview ingredients={ingredients} />
      <CeilingControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        />
    </div>
  );
}

export default CeilingBuilder;