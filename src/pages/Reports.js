import React from "react";
import SidebarReports from "../components/SidebarReports";
import "../css/reports.scss";

class Reports extends React.Component {
    render() {
        return (
            <section className='reports-page'>
                <aside>
                    <SidebarReports />
                </aside>
                <main></main>
            </section>
        );
    }
}

export default Reports;
