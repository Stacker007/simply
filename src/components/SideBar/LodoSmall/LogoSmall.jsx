import React from 'react';
import l from './LogoSmall.module.css'

const Logo = () =>{
    return (
        <div className={l.logo_small}>
            <div className={l.logo}>
                SIMPLY
            </div>
            {/*<div className={'descriptor'}>*/}
                {/*The simplest TO-DO list*/}
            {/*</div>*/}
        </div>
    )
}
export default Logo;