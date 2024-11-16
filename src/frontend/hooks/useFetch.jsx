import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = ({ url, fetchTrigger = null }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null);
    const token = localStorage.getItem('token');
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {

        
        // console.log('inside use effect of useFetch hooks inside hooks folder');
        // using try catch

        /*
        const fetchData = async () => {
            try {
                const response = await axios.get(url, {
                    headers: {
                        'Accept': 'application/json',
                    }
                });
                setData(response.data);
            } catch (e) {
                if (e) {
                    setErrors(e);
                }
            } finally {
                setLoading(false);
            }

        }
        fetchData();
        */

        // not using try catch

        // resetting loading whenever dependencies change
        setLoading(true);
        setErrors(null);

        axios.get(`http://127.0.0.1:8000/api/${url}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                setData(response.data);
                setIsSuccess(true);
            }).catch((error) => {
                setErrors(error);
                setIsSuccess(false);
            }).finally(() => {
                setLoading(false);
            })

    }, [url, fetchTrigger])

    return { data, loading, errors, isSuccess };

}

export default useFetch;
