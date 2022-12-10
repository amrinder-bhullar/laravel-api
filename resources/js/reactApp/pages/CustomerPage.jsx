import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CustomerPage = () => {
    let [customer, setCustomer] = useState();
    const params = useParams();

    let getCustomer = async () => {
        let baseUrl = `http://laravel-api.test/api/v1/customers/${params.id}?includeInvoices=true`;

        // const response = await fetch(baseUrl);
        // const data = await response.json();
        axios.get(baseUrl).then((response) => {
            setCustomer(response.data.data);
            console.log(response.data.data);
        });
    };
    useEffect(() => {
        getCustomer();
    }, [params.id]);

    return (
        <div className="p-5">
            {customer && <div className="text-2xl">{customer.name}</div>}
            {customer &&
                customer.invoices.map((invoice) => (
                    <div key={invoice.id}>{invoice.amount}</div>
                ))}
            <Link
                className="px-2 py-1 mt-4 bg-black text-white text-xl"
                to={"/"}
            >
                Back
            </Link>
        </div>
    );
};

export default CustomerPage;
