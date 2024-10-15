import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [authenticatedUserDetails, setAuthenticatedUserDetails] =
    useState(null);

  const [decodedToken, setDecodedToken] = useState(
    localStorage.getItem("token")
      ? jwtDecode(localStorage.getItem("token"))
      : null
  );

  const fetchData = async () => {
    if (!decodedToken?.user?.id) {
      console.error("User ID not available.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/fetch-user/${decodedToken.user.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setAuthenticatedUserDetails(data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const login = async (formData) => {
    try {
      console.log("Data", formData);
      const response = await fetch("http://localhost:3000/api/login-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data.token);

      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        setDecodedToken(jwtDecode(data.token));
        toast.success("Login Success!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/dashboard");
      } else if (response.status === 400) {
        toast.error("Invalid credentials!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else if (response.status === 500) {
        console.error("Server error");
      } else {
        console.error("Unexpected error:", response.message);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuthenticatedUserDetails(null);

    toast.success("Logout Success!", {
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
    }, 1000);
  };

  useEffect(() => {
    if (decodedToken) {
      fetchData();
    }
  }, [decodedToken]);

  const context = {
    decodedToken,
    login,
    logout,
    authenticatedUserDetails,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
