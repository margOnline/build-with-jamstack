require('dotenv').config();

const axios = require("axios");
const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`;

module.exports = async function() {
  try {
    const response = await axios.get(url);
    return response.data
  } catch (error) {
    return error
  }

};