import React from 'react';
import classes from './Header.module.css'
const Header = () =>{
    return (
        <header className={classes.header}>

            <div className={'descriptor'}>
                The simplest TO-DO list
            </div>
        </header>
    )
}
export default Header;