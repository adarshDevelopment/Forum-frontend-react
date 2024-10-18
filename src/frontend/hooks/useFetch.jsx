import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = ({ url }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
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

        axios.get(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((response) => {
                setData(response.data);
            }).catch((error) => {
                setErrors(error);
            }).finally(() => {
                setLoading(false);
            })

    }, [url])

    return { data, loading, errors };

}

export default useFetch;
