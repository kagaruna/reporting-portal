import React from "react";
import ReactModal from "react-modal-resizable-draggable";
import ResponsiveTable from "./ResponsiveTable";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import SvgIcon from "./SvgIcon";

import "../css/modal-card.scss";

const data = [
    { column1: "Row 1 Col 1", column2: "1234567890", column3: "Row 1 Col 3" },
    { column1: "Row 2 Col 1", column2: "9876543210", column3: "Row 2 Col 3" },
    { column1: "Row 3 Col 1", column2: "1122334455", column3: "Row 3 Col 3" },
];

class ModalCard extends React.Component {
    constructor(props) {
        super(props);
        this.exportPdf = this.exportPdf.bind(this);
    }

    exportPdf() {
        const input = document.getElementById("card-container");
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save("table.pdf");
        });
    }

    render() {
        const { show, onClose, card } = this.props;

        if (!show) {
            return null;
        }

        return (
            <ReactModal
                initWidth={900}
                initHeight={500}
                onFocus={() => console.log("Modal is clicked")}
                className={"my-modal-custom-class"}
                onRequestClose={onClose}
                isOpen={show}>
                <div className='create-pdf' onClick={this.exportPdf}>
                    Сформировать PDF
                </div>
                <div className='close-modal' onClick={onClose}>
                    <SvgIcon id='close-icon' />
                </div>
                <div className='card-wrapper' id='card-container'>
                    <div className='card-wrapper__title'>{card.title}</div>
                    {card.description && (
                        <div className='card-wrapper__description'>
                            {card.description}
                        </div>
                    )}
                    <ResponsiveTable data={data} />
                </div>
            </ReactModal>
        );
    }
}

export default ModalCard;
