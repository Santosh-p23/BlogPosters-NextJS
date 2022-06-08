import { Dictionary } from '@reduxjs/toolkit';
import axios from 'axios'

const addPost = async (post, token) => {

    let form_data = new FormData();

    form_data.append('title', post.title);
    form_data.append('body', post.body);
    form_data.append("photo", post.photo[0]);

    const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        },
      }
    const response = await axios.post('http://localhost:5000/api/posts/', form_data, config);
    return response.data;

}

const getPosts = async (token) => {
    const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      }

    const response = await axios.get('http://localhost:5000/api/posts/', config);
    return response.data;

}

const getAllPosts = async (token) => {
  const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    }

  const response = await axios.get('http://localhost:5000/api/posts/all', config);
  return response.data;

}

const postService ={
    addPost,
    getPosts,
    getAllPosts
} 

export default postService