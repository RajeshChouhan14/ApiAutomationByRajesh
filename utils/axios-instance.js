const axios = require("axios");
const { baseUrl } = require("../test/config/config");

const axiosInstance = axios.create({
  baseURL: baseUrl, // Replace with your actual API base URL
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

module.exports = axiosInstance;
