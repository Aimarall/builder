// import classes from "./Toolbar.module.css";
// import Logo from "../../Logo/Logo";
// import Nav from "../../Nav/Nav";
// import DrawerToggle from "../Drawer/DrawerToggle/DrawerToggle"

// const Toolbar = () => {
//     return (
//         <div className={classes.Toolbar}>
//             <Logo />
//             <Nav />
//             <DrawerToggle />
//         </div>
//     );
// }

// export default Toolbar;

import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../UI/Logo/Logo";
import Nav from "../../UI/Nav/Nav";
import DrawerToggle from "../Drawer/DrawerToggle/DrawerToggle";

export default ({ toggleDrawer }) => (
  <div className={classes.Toolbar}>
    <Logo />
    <nav>
      <Nav />
    </nav>
    <DrawerToggle toggleDrawer={toggleDrawer} />
  </div>
);