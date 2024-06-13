import React from "react";
import "../css/header.scss";
import DevelopmentPage from "../components/DevelopmentPage";

class Main extends React.Component {
    render() {
        return (
            <section>
                <DevelopmentPage title='Личный кабинет' />
            </section>
        );
    }
}

export default Main;
