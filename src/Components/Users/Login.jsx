import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import  "../../Styles/loginPage.css";

const Login = ({ setIsLogin }) => {
  const [username, usernameupdate] = useState("");
  const [password, passwordupdate] = useState("");

  const usenavigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch(`http://localhost:5000/User/${username}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok " + res.statusText);
          }
          return res.json();
        })
        .then((resp) => {
          if (Object.keys(resp).length === 0) {
            toast.error("Please Enter valid username");
          } else {
            if (resp.password === password) {
              toast.success("Success");
              localStorage.setItem("username", username);
              setIsLogin(true);
              usenavigate("/Home");
            } else {
              toast.error("Please Enter valid credentials");
            }
          }
        })
        .catch((err) => {
          toast.error("Login Failed due to :" + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please Enter Username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };

  return (
    <div className="parent" onClick={() => {}}>
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="center">
        <h2>Please Sign In</h2>
        <form onSubmit={ProceedLogin}>
          <input
            type="text"
            placeholder="email"
            value={username}
            onChange={(e) => usernameupdate(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => passwordupdate(e.target.value)}
          />
          <div className="card-footer m-2">
              <button
                type="submit"
                className="btn"
                style={{ backgroundColor: "#354c5f", color: "white" }}
              >
                Login
              </button>
              <Link
                className="btn ms-2"
                to={"/Signin"}
                style={{ backgroundColor: "#ae7d34", color: "white" }}
              >
                New User
              </Link>
            </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;