import axios from "axios";

const getDeleteData = async ({ url, id }) => {


    var token = localStorage.getItem('token');


    try {
        const data = await axios.delete(`http://127.0.0.1:8000/api/${url}/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }
        })

        return { isDeleteSuccess: true, deleteErrors: null };
    } catch (e) {
        if (e.response) {
            return { isDeleteSuccess: false, deleteErrors: e.response.data };
        }
        return { isDeleteSuccess: false, deleteErrors: 'Could not reach the server' };
    }

}

export default getDeleteData;