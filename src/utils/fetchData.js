import axios from "axios";

export const fetchData = async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res;
  } catch (error) {
    console.log(error);
  }
};
