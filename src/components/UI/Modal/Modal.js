// import classes from "./Modal.module.css";
// import Backdrop from "../Backdrop/Backdrop";

// const Modal = ({ show, children, cancel }) => {
//   const style = {
//     transform: show ? "translateY(0)" : "translateY(-100vh)",
//   };

//   return (
//     <div className={classes.Modal}>
//       <Backdrop show={show} click={cancel} />
//       <div className={classes.content} style={style}>
//         {children}
//       </div>
//     </div>
//   );
// }

// export default Modal;

import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";

const Modal = ({ show, children, cancel }) => {
  const style = {
    transform: show ? "translateY(0)" : "translateY(-100vh)",
  };

  return (
    <div className={classes.Modal}>
      <Backdrop show={show} click={cancel} />
      <div className={classes.content} style={style}>
        {children}
        <div>
          <Button onClick={cancel} green>Checkout</Button>
          <Button onClick={cancel}>Cancel</Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;