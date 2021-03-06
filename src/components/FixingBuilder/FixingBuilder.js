import FixingPreview from "./FixingPreview/FixingPreview";
import FixingControls from "./FixingControls/FixingControls";
import withAxios from "../withAxios";
import axios from "../../axios";
import classes from "./FixingBuilder.module.css";
import { useEffect, useState } from "react";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../store/actions/builder";


const FixingBuilder = ({ history }) => {
  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.builder.ingredients);
  const isAuthenticated = useSelector(state => state.auth.token !== null);
  const price = useSelector(state => state.builder.price);
  const [ordering, setOrdering] = useState(false);

  useEffect(() => dispatch(load()), [dispatch]);

  function startOrdering() {
    if (isAuthenticated) {
      setOrdering(true);
    }
    else {
      history.push("./auth");
    }
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  function finishOrdering() {
    setOrdering(false);
    // loadDefaults();
    history.push('/checkout');
  }

  return (
    <div className={classes.FixingBuilder}>
      <FixingPreview
        ingredients={ingredients}
        price={price} />
      <FixingControls
        ingredients={ingredients}
        startOrdering={startOrdering}
      />
      <Modal
        show={ordering}
        cancel={stopOrdering}>
        <OrderSummary
          ingredients={ingredients}
          price={price}
        />
        <Button onClick={finishOrdering} green="green">Checkout</Button>
        <Button onClick={stopOrdering} red="red">Cancel</Button>
      </Modal>
    </div>
  );
}

export default withAxios(FixingBuilder, axios);