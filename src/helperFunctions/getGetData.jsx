import axios from "axios";

export default async function getGetData({ url }) {

    const token = localStorage.getItem('token');
    try {
        const data = await axios.get(`http://127.0.0.1:8000/api/${url}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }
        });

        return { errors: null, data: data.data }
    } catch (e) {
        if (e.response) {
            return { errors: 'Internal Server error', data: null };
        }

        console.log('from getGetPostData', e);
        return { errors: 'Network or unexpected error occured', data: null };
    }

}