import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Import icons

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordLengthError, setPasswordLengthError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "password") {
      setPasswordError("");
      setPasswordLengthError("");
    } else if (name === "email") {
      setEmailError("");
    } else if (name === "username") {
      setUsernameError("");
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return regex.test(email);
  };

  const validateUsername = (username) => {
    const usernameRegex = /^(?!.*[_.]{2})[a-zA-Z0-9._]{3,30}$/;
    return usernameRegex.test(username);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setPasswordError("");
    setEmailError("");
    setPasswordLengthError("");
    setUsernameError("");

    if (formData.password !== confirmPassword) {
      setPasswordError("Password and Confirm Password should be the same");
      return;
    }

    if (!validateEmail(formData.email)) {
      setEmailError("Invalid Email Format");
      return;
    }

    if (!validateUsername(formData.username)) {
      setUsernameError("Username: 3-30 chars; letters, numbers, _ and . only.");
      return;
    }

    if (formData.password.length < 6) {
      setPasswordLengthError("Password should be at least 6 characters long");
      return;
    }

    try {
      console.log("data", formData);
      const response = await fetch("http://localhost:3000/api/register-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      if (response.status === 201) {
        toast.success("User registered successfully!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
        console.log("User registered successfully!", data);
      } else if (response.status === 400) {
        toast.error("User registration failed!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.error("Validation error", data.message);
      } else if (response.status === 500) {
        console.error("Server error");
      } else {
        console.error("Unexpected error:", response.status);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center w-full min-h-screen items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-6 bg-white md:w-96 lg:w-96 w-80 shadow-lg rounded-lg"
      >
        <h1 className="font-bold text-3xl text-center text-gray-900">
          Sign Up
        </h1>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="username"
            className="text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 font-semibold"
            placeholder="Username"
            required
          />
          {usernameError && (
            <p className="text-red-500 text-sm">{usernameError}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 font-semibold"
            placeholder="Email"
            required
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              min={6}
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 font-semibold w-full"
              placeholder="Password"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          {passwordLengthError && (
            <p className="text-red-500 text-sm">{passwordLengthError}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="confirmPassword"
            className="text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 font-semibold w-full"
              placeholder="Confirm Password"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-2"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          {passwordError && (
            <p className="text-red-500 text-sm">{passwordError}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-black hover:bg-gray-800 text-white text-sm py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Sign Up
        </button>

        <Link to={"/"}>
          <div className="flex justify-center">
            <p>
              Already Have An Account?{" "}
              <span className="text-sm text-gray-600 hover:text-gray-800 font-semibold">
                Login
              </span>
            </p>
          </div>
        </Link>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
