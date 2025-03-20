import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    password: "",
  });
  const { setUserDetail } = useContext(UserContext);
  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setUserDetails({ ...userDetails, name: e.target.value });
        break;
      case "password":
        setUserDetails({ ...userDetails, password: e.target.value });
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserDetail({
      name: userDetails.name,
      password: userDetails.password,
    });
  };
  return (
    <div className="res-container">
      <h1 className="font-bold text-2xl text-center mb-5 mt-3">Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Username"
          className="border rounded p-3 ml-3 mr-3"
          name="name"
          value={userDetails.name}
          required
        />
        <input
          onChange={handleChange}
          type="password"
          placeholder="Password"
          className="border rounded p-3 ml-3 mr-3"
          name="password"
          value={userDetails.password}
          required
        />
        <button className="border rounded bg-blue-400 text-white p-3 w-64 cursor-pointer">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
