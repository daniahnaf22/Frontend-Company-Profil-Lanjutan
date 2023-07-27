import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoAdd, IoCreateOutline, IoTrash } from "react-icons/io5";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };

  const deleteUsers = async (userId) => {
    await axios.delete(`http://localhost:5000/user/${userId}`);
    getUsers();
  };

  return (
    <div className="ml-[50px] relative mb-[900px] ">
      <div className="flex mt-10">
        <h1 className="title font-semibold text-[36px] ">Users</h1>
        <Link
          to="/user/add"
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
              <th>Nama Users</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <Link to={`/user/edit/${user.id}`} className="button is-info">
                    <div className=" btn bg-colorprimary text-2xl hover:bg-colorprimary">
                      <IoCreateOutline className="flex justify-center items-center" />
                    </div>
                  </Link>
                  <button
                    onClick={() => deleteUsers(user.id)}
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

export default UserList;
