import React from "react";
import Moment from "react-moment";
import SidebarReports from "../components/SidebarReports";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../css/reports.scss";
import "../css/react-tabs.scss";

class Reports extends React.Component {
    constructor(props) {
        super(props);

        const date = new Date();

        this.state = {
            title: "Оперативный отчет",
            description:
                "Оперативный отчёт о результатах деятельности представляет собой важный инструмент для анализа и контроля работы предприятия. Он позволяет отслеживать выполнение планов, анализировать эффективность работы подразделений и своевременно выявлять проблемы.",
            date: <Moment date={date} format='DD.MM.YYYY' />,
        };
    }

    render() {
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
                                            {this.state.description}
                                        </div>
                                        <div className='report-card__list-wrapper'>
                                            <div className='cardlist'>
                                                <div className='cardlist__item'>
                                                    <div className='item-image'></div>
                                                    <div className='item-options'>
                                                        <div className='item-options__date'></div>
                                                    </div>
                                                    <div className='item-title'>
                                                        Оперативные показатели
                                                    </div>
                                                </div>
                                            </div>
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
            </section>
        );
    }
}

export default Reports;
