import React, { createRef } from "react";
import SvgIcon from "./SvgIcon";

import "../css/responsive-table.scss";

class IndicatorsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortedRows: props.data.rows,
            sortDirection: {},
            tableWidth: 0,
        };
        this.tableRef = createRef();
        this.updateWidth = this.updateWidth.bind(this);
    }

    componentDidMount() {
        this.resizeObserver = new ResizeObserver(this.updateWidth);
        this.resizeObserver.observe(this.tableRef.current);
        this.updateWidth();
    }

    componentWillUnmount() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    }

    updateWidth() {
        if (this.tableRef.current) {
            this.setState({ tableWidth: this.tableRef.current.offsetWidth });
        }
    }

    handleSort = (columnType) => {
        const direction =
            this.state.sortDirection[columnType] === "asc" ? "desc" : "asc";

        const sortedData = [...this.state.sortedRows].sort((a, b) => {
            if (a[columnType] < b[columnType]) {
                return direction === "asc" ? -1 : 1;
            }
            if (a[columnType] > b[columnType]) {
                return direction === "asc" ? 1 : -1;
            }
            return 0; // Values are equal
        });

        this.setState({
            sortedRows: sortedData,
            sortDirection: { [columnType]: direction },
        });
    };

    renderArrow(columnType) {
        const direction = this.state.sortDirection[columnType];
        if (direction === "asc") {
            return "sort-arrow-up-icon"; // Стрелка вверх
        } else if (direction === "desc") {
            return "sort-arrow-down-icon"; // Стрелка вниз
        }
        return "sort-arrow-icon";
    }

    render() {
        // const { data } = this.props;
        const { cols } = this.props.data;
        const { tableWidth } = this.state;

        // Базовый расчет размера шрифта
        // let fontSize = tableWidth / 50;
        let fontSize = tableWidth / 65;

        // Настройка максимального и минимального размера шрифта
        const minFontSize = 12;
        const maxFontSize = 16;

        if (fontSize < minFontSize) fontSize = minFontSize;
        if (fontSize > maxFontSize) fontSize = maxFontSize;

        return (
            <div className='adaptive-table-container'>
                <table className='adaptive-table' ref={this.tableRef}>
                    <thead>
                        <tr>
                            {cols.map((col) => (
                                <th
                                    className='sort'
                                    key={col.type}
                                    onClick={() => this.handleSort(col.type)}>
                                    {col.name}

                                    <div className='adaptive-table__sort'>
                                        <SvgIcon
                                            id={this.renderArrow(col.type)}
                                        />
                                    </div>
                                </th>
                            ))}
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.sortedRows.map((row, index) => (
                            <tr key={index}>
                                <td style={{ fontSize: `${fontSize}px` }}>
                                    {row.code}
                                </td>
                                <td style={{ fontSize: `${fontSize}px` }}>
                                    {row.indicator}
                                </td>
                                <td style={{ fontSize: `${fontSize}px` }}>
                                    {row.entity}
                                </td>
                                <td style={{ fontSize: `${fontSize}px` }}>
                                    {row.measure}
                                </td>
                                <td style={{ fontSize: `${fontSize}px` }}>
                                    {row.slice}
                                </td>
                                <td style={{ fontSize: `${fontSize}px` }}>
                                    {row.detailing}
                                </td>
                                <td style={{ fontSize: `${fontSize}px` }}>
                                    {row.links.length}
                                </td>
                                <td width='40'>
                                    <div className='adaptive-table__edit'>
                                        <SvgIcon id='edit-icon' />
                                    </div>
                                </td>
                                <td width='40'>
                                    <div className='adaptive-table__delete'>
                                        <SvgIcon id='trash-icon' />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default IndicatorsTable;
