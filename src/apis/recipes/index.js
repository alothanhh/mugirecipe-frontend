import { BASE_URL } from '@env';
import axios from 'axios';

export const fetchRecipeItems = async () => {
  try {
    const response = await axios.get(BASE_URL + 'recipe');
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const fetchRecipeDetail = async (id) => {
  try {
    const response = await axios.get(BASE_URL + 'recipe/' + id);
    // console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const searchRecipeItems = async (keyword) => {
  try {
    const response = await axios.get(BASE_URL + 'recipe/search', {
      params: {
        name: keyword,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
