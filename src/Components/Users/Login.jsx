import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import styles from "../../Styles/Signin.module.css"; // Ensure this matches your actual path
import image from "../../Images/WhatsApp Image 2023-08-17 at 1.03.18 AM.jpeg";

const Login = ({ setIsLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
  }, []);

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

  const handleLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:5000/User/" + username)
        .then((res) => res.json())
        .then((resp) => {
          if (Object.keys(resp).length === 0) {
            toast.error("Please Enter valid username");
          } else if (resp.password === password) {
            toast.success("Success");
            localStorage.setItem("username", username);
            setIsLogin(true);
            navigate("/Home");
          } else {
            toast.error("Please Enter valid credentials");
          }
        })
        .catch((err) => {
          toast.error("Login Failed due to :" + err.message);
        });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.signin}>
        <div className={styles.content}>
          <h2>Sign in</h2>
          <form className={styles.form} onSubmit={handleLogin}>
            <div className={styles.inputBox}>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <i>Username</i>
            </div>
            <div className={styles.inputBox}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i>Password</i>
            </div>
            <div className={styles.links}>
              <Link to="/ForgotPassword">Forgot Password?</Link>
              <Link to="/Signin">New User?</Link>
            </div>
            <div className={styles.inputBox}>
              <input type="submit" value="Login" />
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
};

export default Login;
