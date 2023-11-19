import axios from 'axios';

const backendURL = 'http://185.251.88.75/api/';

export const fetchNews = async () => {
  try {
    const response = await axios.get(`${backendURL}general/news/?page=1`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNewsIn = async (id) => {
  try {
    const response = await axios.get(`${backendURL}general/news/${id}/`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchQuintion = async () => {
  try {
    const response = await axios.get(`${backendURL}general/faq/?page=1`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
// http://185.251.88.75/api/

export const fetchHistory = async () => {
  try {
    const response = await axios.get(`${backendURL}users/profile/`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
