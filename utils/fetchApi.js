import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': '6c5d54828amshe00b581455d150fp10f0a4jsn76f8b7c1ee1c',
    },
  });
    
  return data;
}