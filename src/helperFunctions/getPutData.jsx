import axios from "axios"

const getPutData = async ({ url, formDadta }) => {
    const token = localStorage.getItem('token');
    const isError = false;
    const isSuccess = false;

    try {
        const data = await axios.put(`http://127.0.0.1:8000/api/${url}`, formDadta, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }
        });
        return { isSuccess: true, errors: null };

    } catch (e) {
        if (e.response) {
            return { isSuccess: false, errors: e.response.data }
        }
        return { isSuccess: false, errors: 'Could not send request to the server' }
    }

}

export default getPutData;