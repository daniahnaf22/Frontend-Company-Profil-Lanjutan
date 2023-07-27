import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const FormEditContact = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getContactById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/contact/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setSubject(response.data.subject);
        setMessage(response.data.message);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getContactById();
  }, [id]);

  const updateContact = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/contact/${id}`, {
        name: name,
        email: email,
        subject: subject,
        message: message,
      });
      navigate("/contact");
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
            <Link to="/products">Contact</Link>
          </li>
          <li>Edit Contact</li>
        </ul>
      </div>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content card w-[1100px] bg-base-100 shadow-xl ml-10">
            <form onSubmit={updateContact}>
              <p className="has-text-centered">{msg}</p>

              <div className="field">
                <label className="label font-normal p-5">Nama Contact</label>
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
                <label className="label font-normal p-5">Subject</label>
                <div className="control ml-5 mr-5">
                  <input
                    type="text"
                    className="input w-full input-bordered hover:input-info"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="subject"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label font-normal p-5">Message</label>
                <div className="control ml-5 mr-5">
                  <input
                    type="text"
                    className="input w-full input-bordered hover:input-info"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Url"
                  />
                </div>
              </div>

              <div className="field">
                <div className="control mr-5 ml-5 mt-8 mb-8">
                  <button
                    type="submit"
                    className="button is-success btn bg-colorprimary w-full hover:bg-colorprimary"
                  >
                    Update
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

export default FormEditContact;
