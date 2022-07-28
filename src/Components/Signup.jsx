import React, { useState } from "react";
import signuppic from "../assets/helloworld.gif";
import "./signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import google from "../assets/google.png";
import linkedin from "../assets/linkedin.png";
import Button2 from "./Button2";
import errorpic from "../assets/InvalidEmail.gif";
import { GoogleLogin } from "react-google-login";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const responseGoogle = () => {
    console.log("glogin");
  };
  const responseGoogleFail = () => {
    console.log("gloginfail");
  };

  const signupfun = (e) => {
    e.preventDefault();
    alert("done");
  };

  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col order-2 order-lg-1">
            <div className="con-image mt-5">
              {error ? (
                <img className="img-signup" src={errorpic} alt="signuppic" />
              ) : (
                <img className="img-signup" src={signuppic} alt="signuppic" />
              )}
            </div>
          </div>
          <div className="txt col pt-0 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
            <div className="container">
              <form id="form1" onSubmit={signupfun}>
                <div className="container">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8">
                      <div className="inp-css">
                        <input
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          type="text"
                          className="butto-2"
                          placeholder="full name"
                          required
                        />
                      </div>
                      <div className="inp-css mt-4">
                        <input
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          type="email"
                          className="butto-2"
                          placeholder="email"
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                          title="Please enter valid email"
                          required
                        />
                      </div>
                      <div className="inp-css mt-4">
                        <input
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                          type="tel"
                          className="butto-2"
                          placeholder="phone #"
                          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                          title="Phone number should contain 10 digits"
                          required
                        />
                      </div>
                      <div className="inp-css mt-4">
                        <input
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          type="password"
                          className="butto-2"
                          placeholder="password"
                          pattern=".{6,}"
                          title="Password should contain six or more characters"
                          required
                        />
                      </div>
                    </div>
                    <div className="col"></div>
                  </div>
                  <div className="row">
                    <p className="txt-2">sign up using </p>
                  </div>
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8">
                      <div className="row">
                        <div className="col-4"></div>
                        <div className="col-2">
                          <GoogleLogin
                            clientId="1002474588776-p7fi5pd1hpf1fjp1p9v33iet3i9u1fco.apps.googleusercontent.com"
                            render={(renderProps) => (
                              <button
                                className="social-btn"
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                              >
                                <img
                                  className="social-media-google"
                                  src={google}
                                />
                              </button>
                            )}
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogleFail}
                            cookiePolicy={"single_host_origin"}
                          />
                        </div>
                        <div className="col-2">
                          <button className="social-btn" form="form2">
                            <img
                              className="social-media-linkedin"
                              src={linkedin}
                            />
                          </button>
                        </div>
                        <div className="col-4"></div>
                      </div>
                    </div>
                    <div className="col"></div>
                  </div>
                  <div className="row">
                    <div className="col-3"></div>
                    <div className="col"></div>
                    <div className="col">
                      <div className="sign-btn">
                        <button
                          form="form1"
                          type="submit"
                          className="btn-2-su"
                          onSubmit={signupfun}
                        >
                          sign up
                        </button>
                      </div>
                    </div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col-4"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
