// import Logo from "../../Logo/Logo";
// import Nav from "../../Nav/Nav";
// import classes from "./Drawer.module.css";


// const Drawer = ({ open }) => {
//     const DrawerClasses = [classes.content];
//     if (open) {
//         DrawerClasses.push(classes.open);
//     }
//     else {
//         DrawerClasses.push(classes.closed);
//     }

//     return (
//         <div className={classes.Drawer}>
//             <div className={[classes.content, classes.closed].join(" ")}>
//                 <Logo />
//                 <Nav />
//             </div>
//         </div>
//     );
// }

// export default Drawer;

import React from "react";
import classes from "./Drawer.module.css";
import Logo from "../../UI/Logo/Logo";
import Nav from "../../UI/Nav/Nav";
import Backdrop from "../../UI/Backdrop/Backdrop";

export default ({ toggleDrawer, open }) => {
  const contentClasses = [classes.content];
  contentClasses.push(open ? classes.Open : classes.Closed);

  return (
    <div className={classes.Drawer}>
      <Backdrop hideCallback={toggleDrawer} show={open} />
      <div className={contentClasses.join(" ")}>
        <Logo />
        <Nav />
      </div>
    </div>
  );
};