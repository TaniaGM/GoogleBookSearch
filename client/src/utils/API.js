import axios from "axios";

export default {
    getAllSaved: () => {
        return axios({
            method: "GET",
            url: "api/books/saved"
        })
    }
}