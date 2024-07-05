import React from "react";
import Moment from "react-moment";
import SidebarReports from "../components/SidebarReports";
import ReportDescription from "../components/ReportDescription";
import CardList from "../components/CardList";
import ModalCard from "../components/ModalCard";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../css/reports.scss";
import "../css/react-tabs.scss";

class Reports extends React.Component {
    constructor(props) {
        super(props);

        function randomDate(start, end) {
            return new Date(
                start.getTime() +
                    Math.random() * (end.getTime() - start.getTime())
            );
        }

        const date = new Date();

        this.state = {
            title: "Оперативный отчет о результатах деятельности ВТБ РБ",
            description:
                "Оперативный отчёт о результатах деятельности представляет собой важный инструмент для анализа и контроля работы предприятия. Он позволяет отслеживать выполнение планов, анализировать эффективность работы подразделений и своевременно выявлять проблемы.",
            date: <Moment date={date} format='DD.MM.YYYY' />,
            cards: [
                {
                    id: 1,
                    title: "Оперативные показатели",
                    description:
                        "Настоящий отчет предназначен для предоставления актуальной информации о ключевых оперативных показателях компании за указанный период. Основная цель отчета – оценка текущего состояния дел, выявление тенденций и определение областей, требующих внимания и улучшений.",
                    update: (
                        <Moment
                            date={randomDate(new Date(2024, 0, 1), new Date())}
                            format='DD.MM.YYYY'
                        />
                    ),
                    isFavorites: false,
                },
                {
                    id: 2,
                    title: "Продажи",
                    update: (
                        <Moment
                            date={randomDate(new Date(2024, 0, 1), new Date())}
                            format='DD.MM.YYYY'
                        />
                    ),
                    isFavorites: false,
                },
                {
                    id: 3,
                    title: "Канальные детализации",
                    update: (
                        <Moment
                            date={randomDate(new Date(2024, 0, 1), new Date())}
                            format='DD.MM.YYYY'
                        />
                    ),
                    isFavorites: false,
                },
                {
                    id: 4,
                    title: "Портфели и приросты",
                    update: (
                        <Moment
                            date={randomDate(new Date(2024, 0, 1), new Date())}
                            format='DD.MM.YYYY'
                        />
                    ),
                    isFavorites: false,
                },
                {
                    id: 5,
                    title: "Клиентская аналитика",
                    update: (
                        <Moment
                            date={randomDate(new Date(2024, 0, 1), new Date())}
                            format='DD.MM.YYYY'
                        />
                    ),
                    isFavorites: false,
                },
                {
                    id: 6,
                    title: "Общие финансовые показатели ГБЛ РБ",
                    update: (
                        <Moment
                            date={randomDate(new Date(2024, 0, 1), new Date())}
                            format='DD.MM.YYYY'
                        />
                    ),
                    isFavorites: false,
                },
                {
                    id: 7,
                    title: "Финансовые показатели ГБЛ РБ",
                    update: (
                        <Moment
                            date={randomDate(new Date(2024, 0, 1), new Date())}
                            format='DD.MM.YYYY'
                        />
                    ),
                    isFavorites: false,
                },
                {
                    id: 8,
                    title: "Финансовые показатели ВТБ РБ",
                    update: (
                        <Moment
                            date={randomDate(new Date(2024, 0, 1), new Date())}
                            format='DD.MM.YYYY'
                        />
                    ),
                    isFavorites: false,
                },
                {
                    id: 9,
                    title: "Исполнение плана по АУР",
                    update: (
                        <Moment
                            date={randomDate(new Date(2024, 0, 1), new Date())}
                            format='DD.MM.YYYY'
                        />
                    ),
                    isFavorites: false,
                },
                {
                    id: 10,
                    title: "Доходность по продуктам",
                    update: (
                        <Moment
                            date={randomDate(new Date(2024, 0, 1), new Date())}
                            format='DD.MM.YYYY'
                        />
                    ),
                    isFavorites: true,
                },
                {
                    id: 11,
                    title: "Рентабельность новых выдач по кредитным продуктам",
                    update: (
                        <Moment
                            date={randomDate(new Date(2024, 0, 1), new Date())}
                            format='DD.MM.YYYY'
                        />
                    ),
                    isFavorites: false,
                },
                {
                    id: 9,
                    title: "Приложения",
                    update: (
                        <Moment
                            date={randomDate(new Date(2024, 0, 1), new Date())}
                            format='DD.MM.YYYY'
                        />
                    ),
                    isFavorites: false,
                },
            ],
            showModal: false,
            selectedCard: null,
        };
    }

    handleCardClick = (card) => {
        this.setState({
            selectedCard: card,
            showModal: true,
        });
    };

    handleCloseModal = () => {
        this.setState({
            showModal: false,
            selectedCard: null,
        });
    };

    render() {
        const { cards, showModal, selectedCard } = this.state;
        return (
            <section className='reports-page'>
                <aside>
                    <SidebarReports />
                </aside>
                <main>
                    <div className='report-card'>
                        <div className='report-card__header'>
                            <div className='report-card__title'>
                                {this.state.title}
                                <span> по состоянию на {this.state.date}</span>
                            </div>
                        </div>
                        <div className='report-card__content'>
                            <div className='report-card__buttons'></div>
                            <div className='report-card__tabs'>
                                <Tabs>
                                    <TabList>
                                        <Tab>Отчет</Tab>
                                        <Tab>Информация</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className='report-card__description'>
                                            <ReportDescription
                                                name='Примечание'
                                                text={this.state.description}
                                            />
                                        </div>
                                        <div className='report-card__list-wrapper'>
                                            <CardList
                                                cards={cards}
                                                onCardClick={
                                                    this.handleCardClick
                                                }
                                            />
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className='report-card__information'>
                                            <div className='report-card__information-item'>
                                                <h2>Название</h2>
                                                <p>
                                                    Оперативный отчет о
                                                    результатах деятельности ВТБ
                                                    РБ
                                                </p>
                                            </div>
                                            <div className='report-card__information-item'>
                                                <h2>Автор</h2>
                                                <p>Иванов Иван Иванович</p>
                                            </div>
                                            <div className='report-card__information-item'>
                                                <h2>
                                                    Ответственное подразделение
                                                </h2>
                                                <p>Финансовый департамент</p>
                                            </div>
                                            <div className='report-card__information-item'>
                                                <h2>Регламент обновления</h2>
                                                <p>
                                                    Ежедневно с 12:00 до 14:00
                                                </p>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </main>
                <ModalCard
                    show={showModal}
                    onClose={this.handleCloseModal}
                    card={selectedCard}
                />
            </section>
        );
    }
}

export default Reports;
