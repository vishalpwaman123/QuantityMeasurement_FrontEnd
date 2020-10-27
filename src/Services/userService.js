import axiosServices from './axiosServices';
let Config = require("../Configration/config");

const axiosService = new axiosServices();
const configUrl = Config.url;

export default class userService {

    PostNotes(data) {

        //let url = configUrl + 'Post';
        //console.log(url);
        let url = "https://localhost:44361/api/QuantityMeasurement/Post"
        return axiosService.post(url, data);

    }

    getNote() {
        let url = configUrl + 'Get';
        //let url = "https://localhost:44361/api/QuantityMeasurement/Get"
        return axiosService.get(url);
    }

}