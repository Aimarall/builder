
// import axios from "axios";
// import CheckoutSummary from "./CheckoutSummary/CheckoutSummary"

// const Checkout = ({ history }) => {
//   function cancelCallback() {
//     history.replace('/');
//   }

//   function submitCallback(event) {
//     event.preventDefault();

//     const data = new FormData(event.target);
//     const order = {
// name: data.get('name'),
// phone: data.get('phone'),
// address: data.get('address'),
// ingredients: {
//   tomato: 0,
//   salami: 5,
//   greenOlives: 6,
//   blackOlives: 10,
//   redPepper: 10,
//   yellowPepper: 10,
//       }
//     }

//     axios.post('https://builder2-97915-default-rtdb.firebaseio.com/orders.json', order)
//       .then(response => {
//         history.replace('/');
//       });
//   }

//   return (
//     <div>
//       <CheckoutSummary
//         submitCallback={submitCallback}
//         cancelCallback={cancelCallback} />
//     </div>
//   );
// }

// export default Checkout;



import axios from "axios";
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary"

const Checkout = ({ history }) => {
  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const order = {
      name: data.get('name'),
      phone: data.get('phone'),
      address: data.get('address'),
      ingredients: {
        almaz1: 3,
        amber1: 2,
        rauchtopaz1: 3,
        rubin1: 2,
        silver1: 2,
        zoloto2: 2,
      }
    }

    axios.post('https://builder2-97915-default-rtdb.firebaseio.com/orders.json', order)
      .then(response => {
        history.replace('/');
      });
  }

  return (
    <div>
      <CheckoutSummary
        submitCallback={submitCallback}
        cancelCallback={cancelCallback} />
    </div>
  );
}

export default Checkout;