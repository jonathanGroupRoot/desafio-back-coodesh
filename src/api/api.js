const axios = require("axios");

const api = axios.create({
    baseURL: "https://randomuser.me/api/"
});

module.exports = api;