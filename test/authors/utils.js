const axios = require("axios");
const { baseUrl } = require("../config/config");

const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

module.exports = {
  apiClient,
};
