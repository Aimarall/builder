

// import classes from "./Logo.module.css";
// import logo from "../../../images/logo.svg";

// const Logo = () => {
//   return (
//     <div className={classes.Logo}>
//       <img src={logo} alt="Builder" />
//       <div>Ceiling</div>
//     </div>
//   );
// }

// export default Logo;
// //<img src={logo} alt="Logo of the Ceiling project" />

import classes from "./Logo.module.css";
import logo from "../../../images/logo.gif";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="Logo" />
      <div>Fixing</div>
    </div>
  );
}

export default Logo;