import React, { useEffect, useState } from 'react'
import axios from 'axios';

const useListData = (listName) => {
    const [listData, setListData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchListData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`drinkList/${listName}`);
                setListData(res.data);
                console.log("it works");
            } catch (error) {
                console.log("失敗");
            }
            setLoading(false);
        }
        fetchListData();
    }, [listName])
    return { listData, loading };
}

export default useListData;