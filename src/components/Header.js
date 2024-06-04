import React from "react";
import SvgIcon from "./SvgIcon";
import { Link, NavLink } from "react-router-dom";
import "../css/header.scss";

class Header extends React.Component {
    render() {
        const setActive = ({ isActive }) => (isActive ? "active" : "");
        return (
            <header>
                <Link to='/' className='logo'>
                    <SvgIcon id='main-logo-icon' className='main-logo' />
                </Link>

                <nav className='main-menu'>
                    <NavLink to='/' className={setActive}>
                        <SvgIcon id='personal-icon' className='nav-icon' />
                        Личный кабинет
                    </NavLink>
                    <NavLink className={setActive} to='/reports'>
                        <SvgIcon id='report-icon' className='nav-icon' />
                        Отчетность
                    </NavLink>
                    <NavLink className={setActive} to='/help'>
                        <SvgIcon id='help-icon' className='nav-icon' />
                        Помощь
                    </NavLink>
                    <a href='/' className='disabled'>
                        <SvgIcon id='info-icon' className='nav-icon' />
                        Реестр показателей
                    </a>
                    <NavLink className={setActive} to='/about'>
                        <SvgIcon id='info-icon' className='nav-icon' />О портале
                    </NavLink>
                </nav>

                <div className='portal-options'>
                    <div className='toggle-themestyles'>
                        <SvgIcon id='tmp-toggle-icon' />
                    </div>
                    <div className='settings'>
                        <SvgIcon id='settings-icon' />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
