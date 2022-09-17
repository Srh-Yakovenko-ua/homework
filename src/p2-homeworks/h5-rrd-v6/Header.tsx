import React from 'react'
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {PATH} from './Pages';

function Header() {

    const activeJunior = ({isActive}: { isActive: boolean }) => isActive ? classes.active : ''
    const activePreJunior = ({isActive}: { isActive: boolean }) => isActive ? classes.active : ''
    const activeJuniorPlus = ({isActive}: { isActive: boolean }) => isActive ? classes.active : ''

    return (
        <div className={classes.dropdown}>
            <button className={classes.dropbtn}></button>
            <div className={classes.dropdownContent}>
                <NavLink to={PATH.PRE_JUNIOR} className={activeJunior}>pre_junior</NavLink>
                <NavLink to={PATH.JUNIOR} className={activePreJunior}>junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} className={activeJuniorPlus}>junior_plus</NavLink>
            </div>
        </div>
    )
}


export default Header
