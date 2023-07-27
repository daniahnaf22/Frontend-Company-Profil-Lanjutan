import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoAdd, IoCreateOutline, IoTrash } from "react-icons/io5";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    const response = await axios.get("http://localhost:5000/blog");
    setBlogs(response.data);
  };

  const deleteBlog = async (blogId) => {
    await axios.delete(`http://localhost:5000/blog/${blogId}`);
    getBlogs();
  };

  return (
    <div className="ml-[50px] relative mb-[900px] ">
      <div className="flex mt-10">
        <h1 className="title font-semibold text-[36px] ">Blogs</h1>
        <Link
          to="/blog/add"
          className="button btn bg-colorprimary hover:bg-colorprimary is-primary mb-2 ml-10"
        >
          <IoAdd className="mr-5 " /> Add New
        </Link>
      </div>
      <div className="overflow-x-auto w-full mt-10 ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>No</th>
              <th>Judul Blog</th>
              <th>Gambar</th>
              <th>Deskripsi</th>
              <th>Created By</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr key={blog.id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>{index + 1}</td>
                <td>{blog.title}</td>
                <td>
                  {blog.img && (
                    <img
                      src={`http://localhost:5000/uploads/${blog.img}`}
                      style={{ maxWidth: "100px" }}
                      alt="Blog"
                    />
                  )}
                </td>
                <td>{blog.desc}</td>
                <td>{blog.createBy}</td>
                <td>
                  <Link to={`/blog/edit/${blog.id}`} className="button is-info">
                    <div className=" btn bg-colorprimary text-2xl hover:bg-colorprimary">
                      <IoCreateOutline className="flex justify-center items-center" />
                    </div>
                  </Link>
                  <button
                    onClick={() => deleteBlog(blog.id)}
                    className="button ml-5"
                  >
                    <div className=" btn bg-colorprimary text-2xl hover:bg-colorprimary">
                      {" "}
                      <IoTrash />{" "}
                    </div>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default BlogList;
