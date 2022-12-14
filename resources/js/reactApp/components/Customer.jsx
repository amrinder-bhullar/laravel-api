import React from "react";
import { Link } from "react-router-dom";

const Customer = ({ customer }) => {
    let { name, city, id } = customer;

    let clickHandler = () => {
        console.log(id);
    };
    return (
        <Link to={"/" + id} className="m-2 cursor-pointer">
            <div className="block text-gray-700 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {city}
                </p>
            </div>
        </Link>
    );
};

export default Customer;
