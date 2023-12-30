import { BASE_URL } from '@env';
import axios from 'axios';

export const fetchCategorizedItems = async (categoryId) => {
  // console.log(`categoryId = ${categoryId}`);
  try {
    const response = await axios.post(BASE_URL + 'recipe/categorie', null, {
      params: {
        categorie: categoryId,
      },
    });
    // console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
