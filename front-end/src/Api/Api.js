import axios from 'axios';

const URL = 'http://localhost:5000/api/getitems';

const fetchPosts = () => axios.get(URL);

const createTaskItem = (newItem)=> axios.post(URL,newItem);


export { fetchPosts, createTaskItem }