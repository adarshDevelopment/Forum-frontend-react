import axios from "axios";
import { useEffect } from "react";

const useFetchPostRequest = ({ url, formData, fetchTrigger = null }) => {

    useEffect(() => {
        // axios.post('')
    }, [url, fetchTrigger])
}

export default useFetchPostRequest;