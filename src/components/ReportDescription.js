import React from "react";
import SvgIcon from "./SvgIcon";
import "../css/reports.scss";

class ReportDescription extends React.Component {
    render() {
        return (
            <div className='description'>
                <SvgIcon id='warning-icon' className='description__icon' />
                <div className='description__name'>{this.props.name}</div>
                <div className='description__text'>{this.props.text}</div>
            </div>
        );
    }
}

export default ReportDescription;
