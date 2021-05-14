// import axios from "axios";
// import { useEffect, useState } from "react";
// import Order from "./Order/Order";
// import classes from "./Orders.module.css";

// const Orders = () => {
//     const [orders, setOrders] = useState([]);

//     useEffect(() => {
//         axios.get('https://builder2-97915-default-rtdb.firebaseio.com/orders.json')
//             .then(response => {
//                 setOrders(Object.values(response.data));
//             });
//     }, []);

//     const results = orders.map(order => <Order {...order} />);

//     return (
//         <div className={classes.Orders}>
//             {results}
//         </div>
//     );
// }

// export default Orders;




import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../store/actions/orders";
import Order from "./Order/Order";
import withAxios from "../withAxios";
import axios from "../../axios";
import classes from "./Orders.module.css";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders);

  useEffect(() => dispatch(load()), [dispatch]);

  const results = orders.map(order => <Order key={order.id} {...order} />);

  return (
    <div className={classes.Orders}>
      {results}
    </div>
  );
}

export default withAxios(Orders, axios);