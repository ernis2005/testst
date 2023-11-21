import axios from 'axios';

const backendURL = 'http://185.251.88.75/api/';

export const fetchNews = async () => {
  try {
    const response = await axios.get(`${backendURL}general/news/?page=1`);

    return response.data;
  } catch (error) {

  }
};

export const fetchNewsIn = async (id) => {
  try {
    const response = await axios.get(`${backendURL}general/news/${id}/`);
    return response.data;
  } catch (error) {

  }
};

export const fetchQuintion = async () => {
  try {
    const response = await axios.get(`${backendURL}general/faq/?page=1`);

    return response.data;
  } catch (error) {
  
  }
};
