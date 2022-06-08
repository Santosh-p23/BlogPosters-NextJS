import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {addPost} from "../features/posts/postSlice";

type Props = {};

const BlogForm = (props: Props) => {

  const [formdata, setFormData] = useState({ title: "", body: "", photo: "" });
  const { title, body, photo } = formdata;

  const dispatch = useDispatch();


    const onChange = (e) => {
      if (e.target.name === "photo") {
          setFormData((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.files,
            }));
  
      } else {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      }
    };
  

    const onSubmit = (e) => {
      e.preventDefault();
      if(title && body && photo) {
      dispatch(addPost(formdata));
      }
  
      setFormData({ title: "", body: "", photo: "" });
    };

  return (
    <div className="card-bordered lg:w-6/12 grid lg:grid-cols-1 md:grid-cols-1 mt-5">
    <div className="p-4 bg-white rounded-lg shadow-md ">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-3xl md:text-4xl mx-auto">
        <span className="block text-gray-500 xl:inline">Create a post</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="container px-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 mt-2">
            Title
          </label>
          <input
            type="text"
            id="small-input"
            name="title"
            value={title}
            onChange={onChange}
            className="input input-bordered input-primary w-full "
            placeholder="Title"
          />

          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 mt-2">
            Body
          </label>
          <textarea
            id="message"
            rows={6}
            name="body"
            value={body}
            onChange={onChange}
            className="textarea textarea-primary w-full "
            placeholder="Write your post here"
          ></textarea>

          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mt-2">
            Upload file
          </label>
          <input
            className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-describedby="user_avatar_help"
            name="photo"
            onChange ={onChange}
            id="user_avatar"
            type="file"
          />

         <button type="submit" className="m-3 float-right bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          <span className="text-white">Submit</span>
        </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default BlogForm;
