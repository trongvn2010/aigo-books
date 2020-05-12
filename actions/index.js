import axios from 'axios';
import Cookies from 'js-cookie';

import { getCookieFromReq } from '../helpers/utils';

const axiosInstance = axios.create({
  baseURL: `${process.env.BASE_URL}/api/v1`,
  timeout: 3000
});


const setAuthHeader = (req) => {
  const token = req ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt');

  if (token) {
    return { headers: {'authorization': `Bearer ${token}`}};
  }

  return undefined;
}

const rejectPromise = (resError) => {
  let error = {};

  if (resError && resError.response && resError.response.data) {
    error = resError.response.data;
  } else {
    error = resError;
  }

  return Promise.reject(error);
}


export const getSecretData = async (req) => {
  const url = '/secret';

  return await axiosInstance.get(url, setAuthHeader(req)).then(response => response.data);
}

export const getBooks = async () => {
  return await axiosInstance.get('/books').then(response => response.data);
}


export const getBookById = async (id) => {
  return await axiosInstance.get(`/books/${id}`).then(response => response.data);
}


export const createBook = async (bookData) => {
  return await axiosInstance.post('/books', bookData, setAuthHeader())
    .then(response => response.data)
    .catch(error => rejectPromise(error))
}

export const updateBook = async (bookData) => {
  return await axiosInstance.patch(`/books/${bookData._id}`, bookData, setAuthHeader())
    .then(response => response.data)
    .catch(error => rejectPromise(error))
}

export const deleteBook = (bookId) => {
  return axiosInstance.delete(`/books/${bookId}`, setAuthHeader()).then(response => response.data);
}















