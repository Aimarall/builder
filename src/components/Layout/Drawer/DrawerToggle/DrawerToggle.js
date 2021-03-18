// import classes from "./DrawerToggle.module.css";

// const DrawerToggle = () => {
//     return (
//        <div className={classes.DrawerToggle}>Toggle</div>
//     );
// }

// export default DrawerToggle;

import React from 'react';
import classes from './DrawerToggle.module.css';

export default ({ toggleDrawer }) => (
  <div className={classes.DrawerToggle} onClick={toggleDrawer}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);