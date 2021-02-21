import axios from 'axios';

const url = 'http://localhost:3003/'

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);

export const login = (loginDetails) => axios.post(`${url}login`, loginDetails);