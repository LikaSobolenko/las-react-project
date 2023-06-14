import React from "react";

import "./App.css";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

export function App() {
    return (
        <div className="container">
            <div>
                <Header />
            </div>
            <div></div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
