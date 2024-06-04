import React from "react";
import Svg from "../img/main.svg";

class SvgIcon extends React.Component {
    render() {
        return (
            <svg className={this.props.className}>
                <use href={Svg + "#" + this.props.id}></use>
            </svg>
        );
    }
}

export default SvgIcon;
