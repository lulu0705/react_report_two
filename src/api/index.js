import axios from "axios"

const URL = "http://127.0.0.1:5000/api/v1"
// const URL = "http://127.0.0.1:5000"

export const getProductById = async ({ queryKey }) => {
  const [productId] = queryKey;
  let data = await axios.get(`${URL}/products/id/${productId}`);
  return data.data;
}

export const getProducts = async ({ queryKey }) => {
  const [url] = queryKey;
  let data;
  if (url === "")
    data = await axios.get(`${URL}/products/all`);
    // data = await axios.get(`${URL}/products`);
  else
    // data = await axios.get(`${URL}/products/${url}`);
    data = await axios.get(`${URL}/products/${url}`);
  return data;
}

