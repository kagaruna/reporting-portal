import React from "react";
import SvgIcon from "./SvgIcon";

// class CardListItem extends React.Component {
//     card = this.props.card;
//     render() {
//         return (
//             <div className='cardlist__item'>
//                 <div className='item-image'></div>
//                 <div className='item-options'>
//                     <div className='item-options__date'>
//                         <SvgIcon id='clock-icon' />
//                         {this.card.update}
//                     </div>
//                 </div>
//                 <div className='item-title'>{this.card.title}</div>
//             </div>
//         );
//     }
// }

class CardListItem extends React.Component {
    render() {
        const { card, onClick } = this.props;

        if (card.demo) {
            return <div className='cardlist__item demo'></div>;
        } else {
            return (
                <div className='cardlist__item' onClick={() => onClick(card)}>
                    <div className='item-image'>
                        <div className='no-image'>
                            <SvgIcon id='image-icon' />
                        </div>
                    </div>
                    <div className='item-options'>
                        <div className='item-options__date'>
                            <SvgIcon id='clock-icon' />
                            {card.update}
                        </div>
                    </div>
                    <div className='item-title'>{card.title}</div>
                </div>
            );
        }
    }
}

export default CardListItem;
