import React from "react";
import SvgIcon from "./SvgIcon";
import ThemeSwitcher from "./ThemeSwitcher";
import { Link, NavLink } from "react-router-dom";
import "../css/header.scss";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: this.getCookieValue("theme"),
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(this.checkThemeChange, 100);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    getCookieValue = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
    };

    checkThemeChange = () => {
        const currentTheme = this.getCookieValue("theme");
        if (currentTheme !== this.state.theme) {
            this.setState({ theme: currentTheme });
        }
    };

    render() {
        const setActive = ({ isActive }) => (isActive ? "active" : "");
        const { theme } = this.state;
        const logoId =
            theme === "dark" ? "main-logo-dark-icon" : "main-logo-icon";
        return (
            <header>
                <Link to='/' className='logo'>
                    <SvgIcon id={logoId} className='main-logo' />
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
                        {/* <SvgIcon id='tmp-toggle-icon' /> */}
                        <ThemeSwitcher />
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
