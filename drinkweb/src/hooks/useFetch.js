import React, { useEffect, useState } from 'react'
import axios from 'axios'


// deal the axios app.get
const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); //check the connection is starting
            try {
                const response = await axios.get(url);
                setData(response.data); //useState can temporarily save data
            } catch (error) {
                setError(error); //useState can temporarily save error
            }
            setLoading(false); //check the connection is end
        }
        fetchData();
    }, [])
    return { data, loading, error };
};

export default useFetch;