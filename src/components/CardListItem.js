import React from "react";
import SvgIcon from "./SvgIcon";

class CardListItem extends React.Component {
    card = this.props.card;
    render() {
        return (
            <div className='cardlist__item'>
                <div className='item-image'></div>
                <div className='item-options'>
                    <div className='item-options__date'>
                        <SvgIcon id='clock-icon' />
                        {this.card.update}
                    </div>
                </div>
                <div className='item-title'>{this.card.title}</div>
            </div>
        );
    }
}

export default CardListItem;
