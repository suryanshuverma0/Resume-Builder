import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <div className="">
      <Router>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
