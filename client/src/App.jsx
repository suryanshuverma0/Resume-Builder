import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthProvider from "./contexts/AuthContext";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="">
      <Router>
      <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/dashboard"
              element={<PrivateRoute element={<Dashboard />} />}
            />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
