
import classes from "./Logo.module.css";
import logo from "../../../images/logo.gif";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="Logo" />
      <div>Jewelry Builder</div>
    </div>
  );
}

export default Logo;