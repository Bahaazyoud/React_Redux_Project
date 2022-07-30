import React, { useContext} from "react";
import { useState } from "react";
import axios from "axios";
import { userContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const { userData, setUserData } = useContext(userContext)

  const [user, setUser] = useState({
    email: "",
    password: "",

  });

  const [error, setError] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:8000/api/login",
      data: user
    })
      .then((res) => {
        setUserData(res.data)

        if (res.data.errors) {
          setError(res.data.errors);
        } else {
          sessionStorage.setItem("user_id", res.data.id);
          navigate("/");
        }

      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };


  console.log(userData)
    return (
        <div>

            <div class="container-scroller">
                <div class="container-fluid page-body-wrapper full-page-wrapper">
                    <div class="content-wrapper d-flex align-items-center auth">
                        <div class="row flex-grow">
                            <div class="col-lg-4 mx-auto">
                                <div class="auth-form-light text-left p-5">
                                    <div class="brand-logo">
                                        {/* <img src="../../assets/images/logo.svg"/> */}
                                    </div>
                                    <h4>Hello! let's get started</h4>
                                    <h6 class="font-weight-light">Sign in to continue.</h6>
                                    <form class="pt-3">
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password"/>
                                        </div>
                                        <div class="mt-3">
                                            <a class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" href="../../index.html">SIGN IN</a>
                                        </div>
                                        <div class="my-2 d-flex justify-content-between align-items-center">
                                            <div class="form-check">
                                                <label class="form-check-label text-muted">
                                                    <input type="checkbox" class="form-check-input"/> Keep me signed in </label>
                                            </div>
                                            {/* <a href="#" class="auth-link text-black">Forgot password?</a> */}
                                        </div>
                                        <div class="mb-2">
                                            <button type="button" class="btn btn-block btn-facebook auth-form-btn">
                                                <i class="mdi mdi-facebook me-2"></i>Connect using facebook </button>
                                        </div>
                                        <div class="text-center mt-4 font-weight-light"> Don't have an account? <a href="register.html" class="text-primary">Create</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- content-wrapper ends --> */}
                </div>
                {/* <!-- page-body-wrapper ends --> */}
            </div>


        </div>
    )
}
