import { BASE_URL } from '..';
import axios from 'axios';

export const login = async (email) => {
  console.log(`baseURL = ${BASE_URL}`);
  try {
    const response = await axios.post(BASE_URL + 'users/login', {
      email: email,
    });
    // console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
