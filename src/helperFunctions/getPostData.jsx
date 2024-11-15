import axios from "axios";
const getPostData = async ({ url, formData }) => {
    var data = {};
    var errors = null;
    var isSuccess = false;

    const token = localStorage.getItem('token');

    // send post data with token 
    console.log('formData: ', formData);
    try {
        data = await axios.post(`http://127.0.0.1:8000/api/${url}`,
            formData
            , {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
        return { data: data.data, isSuccess: true, errors: null }

    } catch (e) {
        if (e.response) {
            errors = e.response.data;
        }
        else {
            errors = 'Network or unexpected error occured';
        }

        return { errors, isSuccess: false, data: null };

    }




    /*
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
        });

    console.log(errors);

    return { errors, isSuccess };

    */
}
export default getPostData;