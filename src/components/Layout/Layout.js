import classes from "./Layout.module.css"
import Toolbar from "./Toolbar/Toolbar"
import Drawer from "./Drawer/Drawer"
import { useState } from "react";


const Layout = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <div className={classes.Layout}>
            <Toolbar setDrawerOpen={setDrawerOpen} />
            <Drawer open={drawerOpen} />
            {children}
        </div>
    );
}

export default Layout;