import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const FormEditBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [img, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [createBy, setCreated] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getBlogById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/blog/${id}`);
        setTitle(response.data.title);
        setImage(response.data.img);
        setDesc(response.data.desc);
        setCreated(response.data.createBy);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getBlogById();
  }, [id]);

  const updateBlog = async (e) => {
    e.preventDefault();
    try {
      // Buat objek FormData dan tambahkan data yang ingin dikirimkan ke server
      const formData = new FormData();
      formData.append("title", title);
      formData.append("img", img); // Gambar ditambahkan sebagai file
      formData.append("desc", desc);
      formData.append("createBy", createBy);

      await axios.put(`http://localhost:5000/blog${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set header 'Content-Type' untuk FormData
        },
      });
      navigate("/blog");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }

    return (
      <div>
        <h1 className="title font-semibold text-[36px] p-5">Blog</h1>
        <div className="text-sm breadcrumbs p-6 mb-5">
          <ul>
            <li>
              <Link to="/dashboard">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>Add Blog</li>
          </ul>
        </div>
        <div className="card is-shadowless">
          <div className="card-content">
            <div className="content card w-[1100px] bg-base-100 shadow-xl ml-10">
              <form onSubmit={updateBlog} className=" ">
                <p className="has-text-centered text-red-800">{msg}</p>

                <div className="field">
                  <label className="label font-normal p-5">Nama Blog</label>
                  <div className="control ml-5 mr-5">
                    <input
                      type="text"
                      className="input w-full input-bordered hover:input-info"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Nama Blog"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label font-normal p-5">Gambar</label>
                  <div className="control ml-5 mr-5">
                    <input
                      type="file"
                      className="w-full input-bordered hover:input-info"
                      onChange={handleFileChange}
                      placeholder="img"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label font-normal p-5">Deskripsi</label>
                  <div className="control ml-5 mr-5">
                    <input
                      type="text"
                      className="input w-full input-bordered hover:input-info"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                      placeholder="desc"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label font-normal p-5">Creator</label>
                  <div className="control ml-5 mr-5">
                    <input
                      type="text"
                      className="input w-full input-bordered hover:input-info"
                      value={createBy}
                      onChange={(e) => setCreated(e.target.value)}
                      placeholder="Url"
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control mr-5 ml-5 mt-8 mb-8">
                    <button
                      type="submit"
                      className="button is-success btn bg-colorprimary w-full hover:bg-colorprimary "
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default FormEditBlog;
