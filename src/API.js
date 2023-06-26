import axios from 'axios';
const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';

const fetchPopularRecipes = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/recipes/popular`
    );
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export { fetchPopularRecipes };
