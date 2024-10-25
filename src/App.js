import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Reports from "./pages/Reports";
import Help from "./pages/Help";
import Indicators from "./pages/Indicators";
import About from "./pages/About";

class App extends React.Component {
    render() {
        return (
            <div id='main'>
                <Header />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/reports' element={<Reports />} />
                    <Route path='/help' element={<Help />} />
                    <Route path='/indicators' element={<Indicators />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </div>
        );
    }
}

export default App;
