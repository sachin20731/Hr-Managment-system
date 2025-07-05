import axios from 'axios';

const API_URL = 'http://localhost:8080/api/employee'; // adjust if needed

export const login = (form) => {
  return axios.post(`${API_URL}/employees/login`, form).then(res => res.data);
};

export const getDepartments = () => {
  return axios.get(`${API_URL}/departments`);
};

export const getDesignations = () => {
  return axios.get(`${API_URL}/designations`);
};
