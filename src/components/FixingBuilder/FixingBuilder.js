import FixingPreview from "./FixingPreview/FixingPreview";
import FixingControls from "./FixingControls/FixingControls";

import classes from "./FixingBuilder.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import { useSelector } from "react-redux";

const FixingBuilder = ({ history }) => {
  const prices = {
    almaz1: 3,
    amber1: 2,
    rauchtopaz1: 3,
    rubin1: 2,
    silver1: 2,
    zoloto2: 2,
  };

  const ingredients = useSelector(state => state.ingredients);
  const price = useSelector(state => state.price);
  const [ordering, setOrdering] = useState(false);

  // useEffect(loadDefaults, []);

  // function loadDefaults() {
  //   axios
  //     .get('https://builder2-97915-default-rtdb.firebaseio.com/default.json')
  //     .then(response => {
  //       setPrice(response.data.price);

  //       // For arrays
  //       // setIngredients(Object.values(response.data.ingredients));
  //       // For objects
  //       setIngredients(response.data.ingredients);
  //     });
  // }

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;


  }

  function removeIngredient(type) {
    if (ingredients[type]) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;


    }
  }

  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  function finishOrdering() {
    axios
      .post('https://builder2-97915-default-rtdb.firebaseio.com/order.json', {
        ingredients: ingredients,
        price: price,
        address: "1234 Jusaeva str",
        phone: "0 777 777 777",
        name: "Sadyr Japarov",
      })
      .then(() => {
        setOrdering(false);
        // loadDefaults();
        history.push('/checkout');
      });
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
        cancel={stopOrdering}>
        <OrderSummary
          ingredients={ingredients}
          price={price}
        />
        <Button onClick={finishOrdering} green>Checkout</Button>
        <Button onClick={stopOrdering}>Cancel</Button>
      </Modal>
    </div>
  );
}

export default FixingBuilder;


