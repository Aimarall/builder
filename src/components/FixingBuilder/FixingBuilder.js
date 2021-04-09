
import FixingPreview from "./FixingPreview/FixingPreview";
import FixingControls from "./FixingControls/FixingControls";
import classes from "./FixingBuilder.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../UI/Modal/Modal";

const FixingBuilder = () => {
  const prices = {
    screw1: 7,
    nail1: 1,
    nut1: 3,

  };
  const [ingredients, setIngredients] = useState({});
  const [price, setPrice] = useState(0);
  const [ordering, setOrdering] = useState(false);

  useEffect(
    () => axios
      .get('https://builder2-97915-default-rtdb.firebaseio.com/default.json')
      .then(response => {
        setPrice(response.data.price);

        // For arrays
        // setIngredients(Object.values(response.data.ingredients));
        // For objects
        setIngredients(response.data.ingredients);
      }), []
  );

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setPrice(price + prices[type]);
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    if (ingredients[type]) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setPrice(price - prices[type]);
      setIngredients(newIngredients);
    }
  }

  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  return (
    <div className={classes.FixingBuilder}>
      <FixingPreview
        ingredients={ingredients}
        price={price} />
      <FixingControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        startOrdering={startOrdering}
        />
      <Modal
        show={ordering}
        cancel={stopOrdering}>Hello</Modal>
    </div>
  );
}

export default FixingBuilder;