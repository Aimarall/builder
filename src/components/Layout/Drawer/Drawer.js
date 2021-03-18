import Logo from "../../Logo/Logo";
import Nav from "../../Nav/Nav";
import classes from "./Drawer.module.css";


const Drawer = ({ open }) => {
    const DrawerClasses = [classes.content];
    if (open) {
        DrawerClasses.push(classes.open);
    }
    else {
        DrawerClasses.push(classes.closed);
    }

    return (
        <div className={classes.Drawer}>
            <div className={[classes.content, classes.closed].join(" ")}>
                <Logo />
                <Nav />
            </div>
        </div>
    );
}

export default Drawer;