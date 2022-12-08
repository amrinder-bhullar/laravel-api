import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function App() {
    let [data, setData] = useState([]);

    useEffect(() => {
        let getData = async () => {
            const response = await fetch(
                // "https://gorest.co.in/public/v2/posts"
                "http://laravel-api.test/api/v1/customers"
            );
            const data = await response.json();
            setData(data);
        };

        getData();
    }, []);

    console.log(data);

    return (
        <div className="container">
            {/* {data.map((post) => (
                <div>{post.title}</div>
            ))} */}
            {/* {data.map((customer) => (
                <div>{customer.name}</div>
            ))} */}
            {data.length ? data[0].name : ""}
            {/* {data[0].title} */}
        </div>
    );
}

export default App;

if (document.getElementById("app")) {
    const Index = ReactDOM.createRoot(document.getElementById("app"));

    Index.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
