import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const FormAddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setconfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/register", {
        name,
        email,
        password,
        confPassword,
      });
      navigate("/users");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <h1 className="title font-semibold text-[36px] p-5">Contact</h1>
      <div className="text-sm breadcrumbs p-6 mb-5">
        <ul>
          <li>
            <Link to="/dashboard">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Add Contact</li>
        </ul>
      </div>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content card w-[1100px] bg-base-100 shadow-xl ml-10">
            <form onSubmit={saveUser} className=" ">
              <p className="has-text-centered text-red-800">{msg}</p>

              <div className="field">
                <label className="label font-normal p-5">Nama Lengkap</label>
                <div className="control ml-5 mr-5">
                  <input
                    type="text"
                    className="input w-full input-bordered hover:input-info"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama Contact"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label font-normal p-5">Email</label>
                <div className="control ml-5 mr-5">
                  <input
                    type="text"
                    className="input w-full input-bordered hover:input-info"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label font-normal p-5">Password</label>
                <div className="control ml-5 mr-5">
                  <input
                    type="password"
                    className="input w-full input-bordered hover:input-info"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="******"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label font-normal p-5">
                  Confirm Password
                </label>
                <div className="control ml-5 mr-5">
                  <input
                    type="password"
                    className="input w-full input-bordered hover:input-info"
                    value={confPassword}
                    onChange={(e) => setconfPassword(e.target.value)}
                    placeholder="*********"
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

export default FormAddUser;
