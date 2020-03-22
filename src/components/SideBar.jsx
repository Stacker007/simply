import React from 'react';
import SnapProfile from './SnapProfile'
const Header = () =>{
    return (
        <div className={'menu'}>
            <SnapProfile/>

            <div>
                <a>TO-DOs</a>
            </div>
            <div>
                <a>BIN</a>
            </div>

        </div>
    )
}
export default Header;