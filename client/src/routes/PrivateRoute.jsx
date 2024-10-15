import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
const PrivateRoute = ({ element }) => {
  const { decodedToken } = useContext(AuthContext);
  console.log("i am protected route", decodedToken);
  return decodedToken ? element : <Navigate to={"/"} />;
};

PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default PrivateRoute;
