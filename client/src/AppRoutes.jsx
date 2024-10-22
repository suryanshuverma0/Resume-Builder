import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

const AppRoutes = () => {
  const { decodedToken } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      {decodedToken ? (
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      )}
    </>
  );
};

export default AppRoutes;
