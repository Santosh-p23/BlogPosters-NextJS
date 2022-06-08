import React from "react";

const BlogList = ({ posts }) => {
  return (
    <>
      <div className="mt-16 lg:w-6/12">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-3xl md:text-4xl ">
          <span className="block text-indigo-500 xl:inline">Posts</span>
        </h1>
        {posts.map((post) => (
          <div className="card card-side bg-base-100 shadow-xl m-3 mt-10">
            <figure>
              <img src={"http://localhost:5000/" + post.photo} alt="Movie" className="w-100 h-100 object-contain md:object-scale-down" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.body}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogList;
