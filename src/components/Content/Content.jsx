import React from 'react';
import classes from './Content.module.css';
const Header = () =>{
    return (
        <header className={classes.main_content}>
            <div>
                Menu
            </div>
            <div>
                Today:
                <div className={classes.table}>
                    today table
                </div>
            </div>
            <div>
                Tomorrow
                <div className={classes.table}>
                    tomorrow table
                </div>
            </div>
            <div>
                Someday
                <div className={classes.table}>
                    someday table
                </div>
            </div>

        </header>
    )
}
export default Header;