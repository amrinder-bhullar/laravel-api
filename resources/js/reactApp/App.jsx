import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import CustomerPage from "./pages/CustomerPage";
import Home from "./pages/Home";

function App() {
    return (
        <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="/:id" element={<CustomerPage />} />
        </Routes>
    );
}

export default App;
