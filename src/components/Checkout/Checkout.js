
// import FixingPreview from "../FixingBuilder/FixingPreview/FixingPreview";
// import CheckoutForm from "../Checkout/CheckoutSummary/CheckoutForm/CheckoutForm";
// import classes from "./Checkout.module.css";
// import axios from "axios";
// import { useSelector } from "react-redux";


// const Checkout = ({ history }) => {
//   const ingredients = useSelector(state => state.ingredients);
//   const price = useSelector(state => state.price);

//   function cancelCallback() {
//     history.replace('/');
//   }

//   function submitCallback(event) {
//     const data = new FormData(event.target);

//     axios.post('https://builder2-97915-default-rtdb.firebaseio.com/orders.json', {
//       name: data.get('name'),
//       address: data.get('address'),
//       phone: data.get('phone'),
//       ingredients: ingredients,
//       price: price,
//     }).then(response => {
//       history.replace('/');
//     });

//     event.preventDefault();
//   }

//   return (
//     <div className={classes.Checkout}>
//       <FixingPreview ingredients={ingredients} price={price} />
//       <CheckoutForm
//         cancelCallback={cancelCallback}
//         submitCallback={submitCallback} />
//     </div>
//   );
// }

// export default Checkout;



import FixingPreview from "../FixingBuilder/FixingPreview/FixingPreview";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import classes from "./Checkout.module.css";
import axios from "axios";
import { useSelector } from "react-redux";


const Checkout = ({ history }) => {
  const ingredients = useSelector(state => state.ingredients);
  const price = useSelector(state => state.price);

  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    const data = new FormData(event.target);

    axios.post('https://builder2-97915-default-rtdb.firebaseio.com/orders.json', {
      name: data.get('name'),
      address: data.get('address'),
      phone: data.get('phone'),
      ingredients: ingredients,
      price: price,
    }).then(response => {
      history.replace('/');
    });

    event.preventDefault();
  }

  return (
    <div className={classes.Checkout}>
      <FixingPreview ingredients={ingredients} price={price} />
      <CheckoutForm
        cancelCallback={cancelCallback}
        submitCallback={submitCallback} />
    </div>
  );
}
 
export default Checkout;