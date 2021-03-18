import classes from "./Drawer.module.css";

const Drawer = () => {
    return (
        <div className={classes.Drawer}>
            <div className={[classes.content, classes.closed].join(" ")}>
                Drawer
            </div>
        </div>
    );
}

export default Drawer;