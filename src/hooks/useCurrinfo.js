import React from "react";
import { useState } from "react";

function usecurrinfo(currency) {
    const [data, setdata] = useState({})
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then(obj => obj.json())
        .then(obj => setdata(obj[currency]));

    // console.log(data);
    return data;
}

export default usecurrinfo;

// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json