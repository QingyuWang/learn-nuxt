import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3004',
  timeout: 10000,
  withCredentials: true
})
const withBodyMethods = ['POST', 'PUT', 'PATCH'];

async function fetch (method, url, param) {
  const option = {};
  if (withBodyMethods.indexOf(method) > -1) {
    option.data = param;
  } else {
    option.params = param;
  }

  try {
    const res = await axiosInstance({
      method, 
      url, 
      ...option
    });
    console.log(res);
    const response = res.data;
    if (String(response.code === '200')) {
      return Promise.resolve(response.data);
    } else {
      throw new Error(` ${response.code} ${response.message} `);
    }
  } catch (e) {
    return Promise.resolve(null);
  }
}

export function get (url, params) {
  return fetch('GET', url, params);
}

export function post (url, params) {
  return fetch('POST', url, params);
}



