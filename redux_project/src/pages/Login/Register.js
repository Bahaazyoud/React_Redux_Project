import React, { Component } from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './st.css'
// const user_id = JSON.parse(localStorage.setItem("id"));

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    image: "",
  });
  // const [picture, setPicture] = useState([]);
  const handleImage = (e) => {
    setUser({ ...user, image: e.target.files[0] });
  }
  const [error, setError] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("phone", user.phone);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("image", user.image);
    axios({
      method: "post",
      url: "http://localhost:8000/api/register",
      data: formData,
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          setError(res.data.errors);
        } else {
          alert("Successfully Regiseration");
          localStorage.setItem("user_id", user.id);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  useEffect(() => {

  }, [])
  return (
    <>
      {/* <section className="inner-intro bg-1 bg-overlay-black-70">
        <div className="container">
          <div className="row text-center intro-title">
            <div className="col-md-6 text-md-start d-inline-block">
              <h1 className="text-white">Register </h1>
            </div>
            <div className="col-md-6 text-md-end float-end">
              <ul className="page-breadcrumb">
                <li>
                  <a href="#">
                    <i className="fa fa-home"></i> Home
                  </a>{" "}
                  <i className="fa fa-angle-double-right"></i>
                </li>
                <li>
                  <a href="#">pages</a>{" "}
                  <i className="fa fa-angle-double-right"></i>
                </li>
                <li>
                  <span>Register</span>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      <section className="register-form page-section-ptb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="section-title text-center mt-5">
                <h2>Register Form</h2>
                <div style={{ color: "red" }}>{error[0]}</div>
                <div className="separator"></div>
              </div>
            </div>
          </div>
          <form action="#" onSubmit={handleSubmit} className="signin-form m-5 p-3" encType="multipart/form-data">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12">
                <div className="gray-form">
                  <div className="row">
                    <div className="form-group mb-3 col-md-12">
                      <label className="form-label">Your Name</label>
                      <input
                        onChange={(e) =>
                          setUser((prev) => ({ ...prev, name: e.target.value }))
                        }
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        value={user.name}
                        required
                      />
                    </div>
                    <div className="mb-3 col-md-12">
                      <label className="form-label">Image</label>
                      <input
                        className="form-control form-control-lg"
                        type="file"
                        name="image"
                        // onChange={(e) =>
                        //   setUser((prev) => ({
                        //     ...prev,
                        //     image: e.target.files[0],
                        //   }))
                        // }
                        onChange={handleImage}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Mobile phone </label>
                    <input
                      id="phone"
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Enter your mobile no"
                      name="phone"
                      onChange={(e) =>
                        setUser((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      value={user.phone}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email </label>
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Enter your email"
                      name="email"
                      onChange={(e) =>
                        setUser((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      value={user.email}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password </label>
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={(e) =>
                        setUser((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                      value={user.password}
                      required
                    />
                  </div>
                  {/* <a href="#" className="button red">
                    {" "}
                    Register an account{" "}
                  </a> */}
                  <div className="d-flex justify-content-center align-items-center mt-5">
                    <button
                      className="btn btn-outline-light "
                      type="submit">
                      Register
                    </button>

                    
                  </div>
                  <div className="d-flex justify-content-center align-items-center mt-3">
                  <p  >
                      Already have an account? please{" "}
                      <a className="link" href="/login" style={{ color:"white" }}> login here </a>
                    </p>
                    </div>


                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );

};

export default Register;