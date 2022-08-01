import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { userContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './st.css'


const Login = () => {
  const navigate = useNavigate();

  const { userData, setUserData } = useContext(userContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:8000/api/login",
      data: user,
    })
      .then((res) => {
        // setUserData(res.data);

        if (res.data.errors) {
          setError(res.data.errors);
        } else {

          sessionStorage.setItem("user_id", res.data.id);
          if (res.data.roles === "1") {
            navigate("/");


          }else{

            navigate("/dashboard");
          }
        }
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  // console.log(userData);
  return (
    <>
      <section className="register-form  page-section-ptb">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title  text-center mt-5">
                <h2>Login To Your Account</h2>
                <div style={{ color: "#9a55ff" }}>{error[0]}</div>
                <div className="separator"></div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="gray-form clearfix">
                <form
                  action="#"
                  onSubmit={handleSubmit}
                  className="signin-form mt-5 p-3"
                >
                  <div className="mb-3">
                    <label className="form-label" for="name">
                      Email
                    </label>
                    <input
                      id="name"
                      className="form-control form-control-lg"
                      onChange={(e) =>
                        setUser((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={user.email}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" for="Password">
                      Password
                    </label>
                    <input
                      onChange={(e) =>
                        setUser((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                      id="Password"
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      name="Password"
                      value={user.password}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <div className="remember-checkbox mb-4">
                      <input type="checkbox" name="one" id="one" />
                      <label for="one"> Remember me</label>

                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center mt-5">
                    <button
                      className="btn btn-outline-light "
                      type="submit">
                      Login
                    </button>


                  </div>
                  <div className="d-flex justify-content-center align-items-center mt-5">
                    <p className="link">
                      <span>DON’T HAVE AN ACCOUNT? </span>

                      <a href="/register" style={{ color: "white" }}> Create An Account </a>
                    </p>
                  </div>






                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
