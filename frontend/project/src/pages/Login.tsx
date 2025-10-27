import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "../components/auth/AuthContext";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/auth/authenticate`,
        {
          email,
          password,
        }
      );

      if (response.data.token) {
        login(response.data.token, response.data.email, response.data.role);
        toast.success("Login successful!", {
          style: { color: "green" },
        });
        navigate("/home");
      } else {
        toast.error("Login failed. Please check your credentials.", {
          style: { color: "red" },
        });
      }
    } catch (error) {
      toast.error("Error occurred during login.", {
        style: { color: "red" },
      });
    }
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center ">
      <div
        className="card shadow p-4"
        style={{
          maxWidth: "550px",
          width: "100%",
          borderRadius: "12px",
        }}
      >
        <h2 className="text-center mb-3" style={{ color: "black" }}>
          Welcome back
        </h2>
        <p>Enter your credentials to access your account</p>
        <form onSubmit={handleLogin} className="container-fluid">
          <div className="mb-3 px-4">
            <label
              className="form-label"
              style={{
                textAlign: "left",
                display: "block",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3 px-4">
            <label
              className="form-label"
              style={{
                textAlign: "left",
                display: "block",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Password
            </label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="input-group-text bg-white">
                <i
                  className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
                  onClick={() => setShowPassword((prev) => !prev)}
                  style={{ cursor: "pointer" }}
                ></i>
              </span>
            </div>
          </div>
          <div className=" me-4 ms-4 d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary w-100 bg-black"
              style={{
                border: "none",
                marginTop: "10px",
              }}
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="text-center mt-2">
          <span style={{ color: "black" }}>Not a member? </span>
          <a
            href="/register"
            className="text-decoration-none fw-bold"
            style={{ color: "black" }}
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
