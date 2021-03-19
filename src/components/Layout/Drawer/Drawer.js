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


import Logo from "../../Logo/Logo";
import Nav from "../../Nav/Nav";
import Backdrop from "../../UI/Backdrop/Backdrop";
import classes from "./Drawer.module.css";

const Drawer = ({ open, closeDrawer }) => {
  const drawerClasses = [
    classes.content,
    open ? classes.open : classes.closed
  ];

  return (
    <div className={classes.Drawer}>
      <Backdrop show={open} click={closeDrawer} />
      <div className={drawerClasses.join(" ")}>
        <Logo />
        <Nav />
       
      </div>
    </div>
  );
}
 
export default Drawer;