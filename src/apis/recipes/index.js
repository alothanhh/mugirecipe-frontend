import { BASE_URL } from '@env';
import axios from 'axios';

export const fetchRecipeItems = async () => {
  try {
    const response = await axios.get(BASE_URL + 'recipe');
    // console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
