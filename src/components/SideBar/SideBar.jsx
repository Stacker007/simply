import React from 'react';
import classes from './SideBar.module.css'
import SnapProfile from './SnapProfile/SnapProfile'
import Logo from './LodoSmall/LogoSmall'
const Header = () =>{
    return (
        <div className={classes.menu}>
            <Logo/>
            <SnapProfile/>

            <div className={classes.item}>
                <a>TO-DOs</a>
            </div>
            <div className={classes.item}>
                <a>BIN</a>
            </div>

        </div>
    )
}
export default Header;