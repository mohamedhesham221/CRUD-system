/* eslint-disable no-unused-vars */
import axios from "axios";

export async function createNewProduct(formData) {
  try {
    const response = await axios.post(
      "https://crud-web-server-production.up.railway.app/products",
      formData
    );
    return response.data; // Return the created product
  } catch (error) {
    const err = new Error("An error occurred while creating the product");
    err.code = error.response?.status;
    err.info = error.response?.data;
    throw err;
  }
}

export async function fetchProducts() {
  try {
    const response = await axios.get("https://crud-web-server-production.up.railway.app/products");
  return response.data;
  } catch (error) {
    console.log(error);
    
  }
}

export async function getProductById(id) {
  try {
    const response = await axios.get(`https://crud-web-server-production.up.railway.app/products/${id}`);

    return response.data;
  } catch (error) {
    console.log(error);
    
  }
}

export async function updateProduct({ id, ...data }) {
  try {
    const response = await axios.put(
      `https://crud-web-server-production.up.railway.app/products/${id}`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
    
  }
}

export async function deleteProduct(id) {
  try {
    await axios.delete(`https://crud-web-server-production.up.railway.app/products/${id}`);
  } catch (error) {
    console.log(error);
    
  }
}