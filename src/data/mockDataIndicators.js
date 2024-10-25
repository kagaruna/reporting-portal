const dataIndicators = {
    cols: [
        {
            name: "Код",
            type: "code",
        },
        {
            name: "Показатель",
            type: "indicator",
        },
        {
            name: "Сущность",
            type: "entity",
        },
        {
            name: "Ед. измерения",
            type: "measure",
        },
        {
            name: "Срез",
            type: "slice",
        },
        {
            name: "Детализация",
            type: "detailing",
        },
        {
            name: "Связь с отчетом",
            type: "links",
        },
    ],
    rows: [
        {
            code: "–",
            indicator: "Объем",
            entity: "Пассивный портфель",
            measure: "Рубли",
            slice: "Валюта",
            detailing: "В разрезе RUR, USD, EUR, CNY, OTH",
            links: [
                {
                    title: "Оперативный отчет о результатах деятельности ВТБ РБ",
                    pages: [
                        {
                            number: "2",
                            link: "/report/opRepResVTBRB#2",
                        },
                        {
                            number: "3",
                            link: "/report/opRepResVTBRB#3",
                        },
                        {
                            number: "12",
                            link: "/report/opRepResVTBRB#12",
                        },
                    ],
                },
                {
                    title: "Ещё один какой-нибудь отчет",
                    pages: [
                        {
                            number: "3",
                            link: "/report/moreRep#3",
                        },
                    ],
                },
            ],
        },
        {
            code: "–",
            indicator: "Объем",
            entity: "Пассивный портфель",
            measure: "Рубли",
            slice: "Дата",
            detailing: "На конец года, на конец месяца, за отчетную дату",
            links: [
                {
                    title: "Оперативный отчет о результатах деятельности ВТБ РБ",
                    pages: [
                        {
                            number: "2",
                            link: "/report/opRepResVTBRB#2",
                        },
                    ],
                },
            ],
        },
        {
            code: "–",
            indicator: "Объем",
            entity: "Пассивный портфель",
            measure: "Рубли",
            slice: "Продукт",
            detailing:
                "Депозиты, текущие счета (включая НС), векселя включены в депозиты",
            links: [
                {
                    title: "Оперативный отчет о результатах деятельности ВТБ РБ",
                    pages: [
                        {
                            number: "2",
                            link: "/report/opRepResVTBRB#2",
                        },
                    ],
                },
            ],
        },
        {
            code: "–",
            indicator: "Объем",
            entity: "Пассивный портфель",
            measure: "Валюта",
            slice: "Валюта",
            detailing: "В разрезе RUR, USD, EUR, CNY, OTH",
            links: [
                {
                    title: "Оперативный отчет о результатах деятельности ВТБ РБ",
                    pages: [
                        {
                            number: "2",
                            link: "/report/opRepResVTBRB#2",
                        },
                        {
                            number: "3",
                            link: "/report/opRepResVTBRB#3",
                        },
                        {
                            number: "12",
                            link: "/report/opRepResVTBRB#12",
                        },
                    ],
                },
                {
                    title: "Ещё один какой-нибудь отчет",
                    pages: [
                        {
                            number: "3",
                            link: "/report/moreRep#3",
                        },
                    ],
                },
            ],
        },
        {
            code: "–",
            indicator: "Объем",
            entity: "Пассивный портфель",
            measure: "Валюта",
            slice: "Дата",
            detailing: "На конец года, на конец месяца, за отчетную дату",
            links: [
                {
                    title: "Оперативный отчет о результатах деятельности ВТБ РБ",
                    pages: [
                        {
                            number: "2",
                            link: "/report/opRepResVTBRB#2",
                        },
                    ],
                },
            ],
        },
        {
            code: "–",
            indicator: "Объем",
            entity: "Пассивный портфель",
            measure: "Валюта",
            slice: "Продукт",
            detailing:
                "Депозиты, текущие счета (включая НС), векселя включены в депозиты",
            links: [
                {
                    title: "Оперативный отчет о результатах деятельности ВТБ РБ",
                    pages: [
                        {
                            number: "2",
                            link: "/report/opRepResVTBRB#2",
                        },
                    ],
                },
            ],
        },
        {
            code: "–",
            indicator: "Прирост",
            entity: "Пассивный портфель",
            measure: "Рубли",
            slice: "Валюта",
            detailing: "В разрезе RUR, USD, EUR, CNY, OTH",
            links: [
                {
                    title: "Оперативный отчет о результатах деятельности ВТБ РБ",
                    pages: [
                        {
                            number: "2",
                            link: "/report/opRepResVTBRB#2",
                        },
                        {
                            number: "3",
                            link: "/report/opRepResVTBRB#3",
                        },
                        {
                            number: "12",
                            link: "/report/opRepResVTBRB#12",
                        },
                    ],
                },
                {
                    title: "Ещё один какой-нибудь отчет",
                    pages: [
                        {
                            number: "3",
                            link: "/report/moreRep#3",
                        },
                    ],
                },
            ],
        },
        {
            code: "–",
            indicator: "Прирост",
            entity: "Пассивный портфель",
            measure: "Рубли",
            slice: "Дата",
            detailing: "На конец года, на конец месяца, за отчетную дату",
            links: [
                {
                    title: "Оперативный отчет о результатах деятельности ВТБ РБ",
                    pages: [
                        {
                            number: "2",
                            link: "/report/opRepResVTBRB#2",
                        },
                    ],
                },
            ],
        },
        {
            code: "–",
            indicator: "Прирост",
            entity: "Пассивный портфель",
            measure: "Рубли",
            slice: "Продукт",
            detailing:
                "Депозиты, текущие счета (включая НС), векселя включены в депозиты",
            links: [
                {
                    title: "Оперативный отчет о результатах деятельности ВТБ РБ",
                    pages: [
                        {
                            number: "2",
                            link: "/report/opRepResVTBRB#2",
                        },
                    ],
                },
            ],
        },
        {
            code: "–",
            indicator: "Прирост",
            entity: "Пассивный портфель",
            measure: "Валюта",
            slice: "Валюта",
            detailing: "В разрезе RUR, USD, EUR, CNY, OTH",
            links: [
                {
                    title: "Оперативный отчет о результатах деятельности ВТБ РБ",
                    pages: [
                        {
                            number: "2",
                            link: "/report/opRepResVTBRB#2",
                        },
                        {
                            number: "3",
                            link: "/report/opRepResVTBRB#3",
                        },
                        {
                            number: "12",
                            link: "/report/opRepResVTBRB#12",
                        },
                    ],
                },
                {
                    title: "Ещё один какой-нибудь отчет",
                    pages: [
                        {
                            number: "3",
                            link: "/report/moreRep#3",
                        },
                    ],
                },
            ],
        },
        {
            code: "–",
            indicator: "Прирост",
            entity: "Пассивный портфель",
            measure: "Валюта",
            slice: "Дата",
            detailing: "На конец года, на конец месяца, за отчетную дату",
            links: [
                {
                    title: "Оперативный отчет о результатах деятельности ВТБ РБ",
                    pages: [
                        {
                            number: "2",
                            link: "/report/opRepResVTBRB#2",
                        },
                    ],
                },
            ],
        },
        {
            code: "–",
            indicator: "Прирост",
            entity: "Пассивный портфель",
            measure: "Валюта",
            slice: "Продукт",
            detailing:
                "Депозиты, текущие счета (включая НС), векселя включены в депозиты",
            links: [
                {
                    title: "Оперативный отчет о результатах деятельности ВТБ РБ",
                    pages: [
                        {
                            number: "2",
                            link: "/report/opRepResVTBRB#2",
                        },
                    ],
                },
            ],
        },
        {
            code: "–",
            indicator: "Прирост",
            entity: "Пассивный портфель",
            measure: "Валюта",
            slice: "Категория операций",
            detailing: "Касса, банкомат, переоценка, операции с ТС и пр",
            links: [
                {
                    title: "Оперативный отчет о результатах деятельности ВТБ РБ",
                    pages: [
                        {
                            number: "2",
                            link: "/report/opRepResVTBRB#2",
                        },
                        {
                            number: "3",
                            link: "/report/opRepResVTBRB#3",
                        },
                        {
                            number: "12",
                            link: "/report/opRepResVTBRB#12",
                        },
                    ],
                },
                {
                    title: "Ещё один какой-нибудь отчет",
                    pages: [
                        {
                            number: "3",
                            link: "/report/moreRep#3",
                        },
                    ],
                },
                {
                    title: "Ещё один какой-нибудь отчет",
                    pages: [
                        {
                            number: "3",
                            link: "/report/moreRep#3",
                        },
                    ],
                },
                {
                    title: "Ещё один какой-нибудь отчет",
                    pages: [
                        {
                            number: "3",
                            link: "/report/moreRep#3",
                        },
                    ],
                },
                {
                    title: "Ещё один какой-нибудь отчет",
                    pages: [
                        {
                            number: "3",
                            link: "/report/moreRep#3",
                        },
                    ],
                },
            ],
        },
        {
            code: "–",
            indicator: "Приток/отток",
            entity: "Пассивный портфель",
            measure: "Рубли",
            slice: "Дата",
            detailing: "На конец года, на конец месяца, за отчетную дату",
            links: [
                {
                    title: "Оперативный отчет о результатах деятельности ВТБ РБ",
                    pages: [
                        {
                            number: "2",
                            link: "/report/opRepResVTBRB#2",
                        },
                    ],
                },
            ],
        },
        {
            code: "–",
            indicator: "Приток/отток",
            entity: "Пассивный портфель",
            measure: "Рубли",
            slice: "Продукт",
            detailing:
                "Депозиты, текущие счета (включая НС), векселя включены в депозиты",
            links: [
                {
                    title: "Оперативный отчет о результатах деятельности ВТБ РБ",
                    pages: [
                        {
                            number: "2",
                            link: "/report/opRepResVTBRB#2",
                        },
                    ],
                },
            ],
        },
        {
            code: "–",
            indicator: "Приток/отток",
            entity: "Пассивный портфель",
            measure: "Валюта",
            slice: "Валюта",
            detailing: "В разрезе RUR, USD, EUR, CNY, OTH",
            links: [
                {
                    title: "Оперативный отчет о результатах деятельности ВТБ РБ",
                    pages: [
                        {
                            number: "2",
                            link: "/report/opRepResVTBRB#2",
                        },
                        {
                            number: "3",
                            link: "/report/opRepResVTBRB#3",
                        },
                        {
                            number: "12",
                            link: "/report/opRepResVTBRB#12",
                        },
                    ],
                },
                {
                    title: "Ещё один какой-нибудь отчет",
                    pages: [
                        {
                            number: "3",
                            link: "/report/moreRep#3",
                        },
                    ],
                },
            ],
        },
        {
            code: "–",
            indicator: "Приток/отток",
            entity: "Пассивный портфель",
            measure: "Валюта",
            slice: "Дата",
            detailing: "На конец года, на конец месяца, за отчетную дату",
            links: [
                {
                    title: "Оперативный отчет о результатах деятельности ВТБ РБ",
                    pages: [
                        {
                            number: "2",
                            link: "/report/opRepResVTBRB#2",
                        },
                    ],
                },
            ],
        },
        {
            code: "–",
            indicator: "Приток/отток",
            entity: "Пассивный портфель",
            measure: "Валюта",
            slice: "Продукт",
            detailing:
                "Депозиты, текущие счета (включая НС), векселя включены в депозиты",
            links: [
                {
                    title: "Оперативный отчет о результатах деятельности ВТБ РБ",
                    pages: [
                        {
                            number: "2",
                            link: "/report/opRepResVTBRB#2",
                        },
                    ],
                },
            ],
        },
        {
            code: "–",
            indicator: "Прирост",
            entity: "Пассивный портфель",
            measure: "Рубли",
            slice: "Валюта",
            detailing: "В разрезе RUR, USD, EUR, CNY, OTH",
            links: [
                {
                    title: "Оперативный отчет о результатах деятельности ВТБ РБ",
                    pages: [
                        {
                            number: "2",
                            link: "/report/opRepResVTBRB#2",
                        },
                        {
                            number: "3",
                            link: "/report/opRepResVTBRB#3",
                        },
                        {
                            number: "12",
                            link: "/report/opRepResVTBRB#12",
                        },
                    ],
                },
                {
                    title: "Ещё один какой-нибудь отчет",
                    pages: [
                        {
                            number: "3",
                            link: "/report/moreRep#3",
                        },
                    ],
                },
            ],
        },
    ],
};

export default dataIndicators;
