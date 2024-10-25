import React from "react";
import ReactModal from "react-modal-resizable-draggable";
import SvgIcon from "./SvgIcon";

import "../css/modal-card.scss";

class ModalIndicator extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.exportPdf = this.exportPdf.bind(this);
    // }

    render() {
        // const { show, onClose, card } = this.props;
        const { show, onClose } = this.props;

        if (!show) {
            return null;
        }

        return (
            <ReactModal
                initWidth={960}
                initHeight={785}
                top={50}
                onFocus={() => console.log("Modal is clicked")}
                className={"my-modal-custom-class"}
                onRequestClose={onClose}
                isOpen={show}
                disableMove='true'
                disableResize='true'>
                <div className='close-modal' onClick={onClose}>
                    <SvgIcon id='close-icon' />
                </div>
                <div className='card-wrapper' id='card-container'>
                    {/* <div className='card-wrapper__title'>{card.title}</div>
                    {card.description && (
                        <div className='card-wrapper__description'>
                            {card.description}
                        </div>
                    )} */}
                    test
                </div>
            </ReactModal>
        );
    }
}

export default ModalIndicator;
