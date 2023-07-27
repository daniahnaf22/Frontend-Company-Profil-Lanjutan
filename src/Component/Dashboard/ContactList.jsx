import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoAdd, IoCreateOutline, IoTrash } from "react-icons/io5";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    const response = await axios.get("http://localhost:5000/contact");
    setContacts(response.data);
  };

  const deleteContact = async (contactId) => {
    await axios.delete(`http://localhost:5000/contact/${contactId}`);
    getContacts();
  };

  return (
    <div className="ml-[50px] relative mb-[900px] ">
      <div className="flex mt-10">
        <h1 className="title font-semibold text-[36px] ">Contacts</h1>
        <Link
          to="/contact/add"
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
              <th>Nama Pengirim</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Pesan</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={contact.id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>{index + 1}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.subject}</td>
                <td>{contact.message}</td>
                <td>
                  <Link
                    to={`/contact/edit/${contact.id}`}
                    className="button is-info"
                  >
                    <div className=" btn bg-colorprimary text-2xl hover:bg-colorprimary">
                      <IoCreateOutline className="flex justify-center items-center" />
                    </div>
                  </Link>
                  <button
                    onClick={() => deleteContact(contact.id)}
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

export default ContactList;
