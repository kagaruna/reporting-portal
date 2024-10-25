import React from "react";
import IndicatorsTable from "../components/IndicatorsTable";
import data from "../data/mockDataIndicators.js";
import SvgIcon from "../components/SvgIcon.js";
import ModalIndicator from "../components/Modalndicator.js";

import "../css/indicators.scss";

class Indicators extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "Реестр показателей",
            buttonTitle: "Добавить показатель",
            showModal: false,

            keyword: "",
        };
    }

    handleClick = (card) => {
        this.setState({
            // selectedCard: card,
            showModal: true,
        });
    };

    handleCloseModal = () => {
        this.setState({
            showModal: false,
            // selectedCard: null,
        });
    };

    handleKeywordChange = (event) => {
        this.setState({ keyword: event.target.value });
    };

    render() {
        const { showModal, keyword } = this.state;
        return (
            <section className='indicators-page'>
                <div className='indicators'>
                    <div className='indicators__header'>
                        <div className='indicators__title'>
                            {this.state.title}
                        </div>
                        <div
                            className='indicators__add-button'
                            onClick={this.handleClick}>
                            <SvgIcon id='plus-icon' />
                            {this.state.buttonTitle}
                        </div>
                    </div>
                    <div className='indicators__filter'>
                        {/* <div className='ind-search'>
                            <label>
                                <span>Поиск</span>
                                <div className='ind-search__wrapper'>
                                    <SvgIcon
                                        id='search-icon'
                                        width='16'
                                        height='16'
                                    />
                                    <input
                                        type='text'
                                        placeholder='Поиск по ключевому слову'
                                        value={keyword}
                                        onChange={this.handleKeywordChange}
                                    />
                                </div>
                            </label>
                        </div> */}
                    </div>
                    <div className='indicators__table'>
                        <IndicatorsTable data={data} />
                    </div>
                </div>
                <ModalIndicator
                    show={showModal}
                    onClose={this.handleCloseModal}
                />
            </section>
        );
    }
}

export default Indicators;
