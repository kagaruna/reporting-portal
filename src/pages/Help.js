import React from "react";
import "../css/header.scss";
import DevelopmentPage from "../components/DevelopmentPage";

class Help extends React.Component {
    render() {
        return (
            <section>
                <DevelopmentPage title='Помощь' />
            </section>
        );
    }
}

export default Help;
