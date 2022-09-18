import React from 'react'
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {PATH} from './Pages';

function Header() {

    const activeClassName = ({isActive}: { isActive: boolean }) => isActive ? classes.active : ''

    return (
        <div className={classes.dropdown}>
            <button className={classes.dropbtn}></button>
            <div className={classes.dropdownContent}>
                <NavLink to={PATH.PRE_JUNIOR} className={activeClassName}>pre_junior</NavLink>
                <NavLink to={PATH.JUNIOR} className={activeClassName}>junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} className={activeClassName}>junior_plus</NavLink>
            </div>
        </div>
    )
}


export default Header
