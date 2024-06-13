import React from "react";
import "../css/header.scss";
import DevelopmentPage from "../components/DevelopmentPage";

class About extends React.Component {
    render() {
        return (
            <section>
                <DevelopmentPage title='О портале' />
            </section>
        );
    }
}

export default About;
