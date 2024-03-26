import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //Navigate

// Components
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;

// #0873b9 Blue
// #8ac642 Green

// import { FaEdit } from "react-icons/fa";
// import { FaEye } from "react-icons/fa6";
// import { MdDelete } from "react-icons/md";
// import { FaRegUser } from "react-icons/fa";

// React Toastify
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { toastDesign } from "../../helper/toastDesign";
