import axios from "axios";
const useGetPostData = ({ url, formData }) => {
    var data = {};
    var errors = null;
    var loading = true;
    var isSuccess = false;

    const token = localStorage.getItem('token');

    // send post data with token 

    axios.post(`http://127.0.0.1:8000/api/${url}`, {
        formData
    }, {
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(res => {
            console.log('res: ', res);
            data = res.data;
            isSuccess = true
            console.log('inisde success');
        })
        .catch(e => {

            if (e.response) {
                errors = e.response.data.errors;
            } else {
                errors = 'Network or unexpected error occured';
            }
            isSuccess = false
        })
        .finally(
            loading = false
        );

    console.log(errors);

    return { errors, loading, isSuccess };
}
export default useGetPostData;