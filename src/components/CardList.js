import React from "react";
import CardListItem from "./CardListItem";

// class CardList extends React.Component {
//     render() {
//         if (this.props.cards.length > 0) {
//             return (
//                 <div className='cardlist'>
//                     {this.props.cards.map((el) => (
//                         <CardListItem key={el.id} card={el} />
//                     ))}
//                 </div>
//             );
//         } else {
//             return (
//                 <div>
//                     <h3>Нет слайдов</h3>
//                 </div>
//             );
//         }
//     }
// }
class CardList extends React.Component {
    render() {
        const { cards, onCardClick } = this.props;
        return (
            <div className='cardlist'>
                {cards.map((card) => (
                    <CardListItem
                        key={card.id}
                        card={card}
                        onClick={onCardClick}
                    />
                ))}
            </div>
        );
    }
}

export default CardList;
