// React Toastify
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// Component
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="loginPageCont w-full h-[100vh]">
      <div className="loginPageWrapper w-[100%] h-[100%] flex flex-col items-center justify-start gap-3 bg-zinc-100">
        <ToastContainer toastClassName="customToast" />

        <div className="heading py-5 flex flex-col items-center">
          <img
            src="/assets/SMIT-Logo.jpeg"
            alt="SMIT"
            className="w-20 h-20 rounded-full"
          />
          <h1 className="text-[45px] font-bold text-[#8ac642] underline">
            Saylani IT Training Attendance Portal
          </h1>
        </div>

        {/* Login Form */}
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
