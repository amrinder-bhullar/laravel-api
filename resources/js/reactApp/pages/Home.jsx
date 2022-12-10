import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Customer from "../components/Customer";

const Home = () => {
    let [data, setData] = useState([]);

    let getData = async () => {
        const response = await fetch(
            "http://laravel-api.test/api/v1/customers"
        );
        const data = await response.json();
        setData(data.data);
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container flex flex-wrap mt-10">
            {data.length
                ? data.map((customer) => (
                      <Customer key={customer.id} customer={customer} />
                  ))
                : ""}
        </div>
    );
};

export default Home;
