const axios = require('axios').default;

export default class axiosServices {
    post(url, data) {
        //console.log(data);
        return axios.post(url, data);
    }

    get(url) {
        return axios.get(url, false);
    }
}