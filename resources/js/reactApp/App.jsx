import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
    return (
        <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
        </Routes>
    );
}

export default App;
