import React, { createRef } from "react";
import "../css/responsive-table.scss";

class ResponsiveTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

    render() {
        const { data } = this.props;
        const { tableWidth } = this.state;

        // Базовый расчет размера шрифта
        let fontSize = tableWidth / 50;

        // Настройка максимального и минимального размера шрифта
        const minFontSize = 12;
        const maxFontSize = 18;

        if (fontSize < minFontSize) fontSize = minFontSize;
        if (fontSize > maxFontSize) fontSize = maxFontSize;

        return (
            <div className='adaptive-table-container'>
                <table className='adaptive-table' ref={this.tableRef}>
                    <thead>
                        <tr>
                            <th>Header 1</th>
                            <th>Header 2</th>
                            <th>Header 3</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                <td style={{ fontSize: `${fontSize}px` }}>
                                    {row.column1}
                                </td>
                                <td style={{ fontSize: `${fontSize}px` }}>
                                    {row.column2}
                                </td>
                                <td style={{ fontSize: `${fontSize}px` }}>
                                    {row.column3}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default ResponsiveTable;
