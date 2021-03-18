// import classes from "./Logo.module.css";
// import logo from "../../images/logo.svg";


// const Logo = () => {
//     return (
//         <div className={classes.Logo}>
//             <img src={logo} alt="logo"/>
//             <span>lemon</span>
//         </div>
//     );
// }

// export default Logo;

import classes from "./Logo.module.css";
import logo from "../../images/logo.svg";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="Pizza logo" />
      <div>Pizza</div>
    </div>
  );
}

export default Logo;