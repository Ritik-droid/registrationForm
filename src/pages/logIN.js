import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const LogIN = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/");
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      axios
        .post("http://localhost:5000/login", formData)
        .then((res) => {
          console.log(res.data)
          if (res.data === "Success") {
            navigate("/Home")
            alert("Login SuccessFul");
          } else {
            alert("Invalid UserID or Password");
          }
        });
    } catch (error) {
      alert(error);
    }
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <section>
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <div className="signin">
          <div className="content">
            <h2>Sign In</h2>

            <form className="form" onSubmit={handleSubmit}>
              <div className="inputBox">
                <input
                  type="text"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />{" "}
                <i>Username</i>
              </div>

              <div className="inputBox">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  required
                  onChange={handleChange}
                />{" "}
                <i>Password</i>
              </div>

              <div className="links">
                {" "}
                <a href="#">Forgot Password</a>{" "}
                <a onClick={handleLoginClick} style={{ cursor: "pointer" }}>
                  Signup
                </a>
              </div>

              <div className="inputBox">
                <input type="submit" value="Login" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogIN;
