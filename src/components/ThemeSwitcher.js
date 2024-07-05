import React, { Component } from "react";
// import Svg from "../img/main.svg";
import "../css/theme-switcher.scss";
import Cookies from "js-cookie";

export default class ThemeSwitcher extends Component {
    constructor(props) {
        super(props);

        // Получите тему из cookie, или установите 'light' по умолчанию
        const initialTheme = Cookies.get("theme") || "light";

        this.state = {
            theme: initialTheme,
        };

        // Установите начальную тему
        document.body.className = initialTheme;
    }

    toggleTheme = () => {
        this.setState((prevState) => {
            const newTheme = prevState.theme === "light" ? "dark" : "light";
            Cookies.set("theme", newTheme, { expires: 7 }); // Смотрите cookie на 7 дней
            document.body.className = newTheme;
            return { theme: newTheme };
        });
    };

    render() {
        return (
            <label class='form-switch'>
                <input
                    type='checkbox'
                    onChange={this.toggleTheme}
                    checked={this.state.theme === "dark"}></input>
                <i></i>
                {/* Switch to {this.state.theme === "light" ? "dark" : "light"} mode */}
            </label>
        );
    }
}
