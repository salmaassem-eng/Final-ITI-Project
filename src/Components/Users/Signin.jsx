import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../Styles/loginPage.css"; 

const Signin = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");


  const navigate = useNavigate();

  const isValidate = () => {
    let isProceed = true;
    let errorMessage = "Please enter the value in ";

    if (!id) {
      isProceed = false;
      errorMessage += " Username";
    }

    if (!password) {
      isProceed = false;
      errorMessage += " Password";
    }

    if (password !== confirmPassword) {
      isProceed = false;
      errorMessage += " Confirm Password";
    }

    if (!isProceed) {
      toast.warning(errorMessage);
    }

    return isProceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidate()) {
      const regObj = {
        id,
        password,
        email,
      };

      fetch("http://localhost:5000/User", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(regObj),
      })
        .then((res) => {
          toast.success("Registered successfully.");
          navigate("/Login");
        })
        .catch((err) => {
          toast.error("Failed: " + err.message);
        });
    }
  };


  return (
    <div className="parent">
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="center">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            minLength="3"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="6"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength="6"
          />
          <div className="button-container">
            <button type="submit">Register</button>
          </div>
        </form>
        <ToastContainer />
        <p>Already a member? <Link to="/Login">Login</Link></p>
      </div>
    </div>
  );
};

export default Signin;
