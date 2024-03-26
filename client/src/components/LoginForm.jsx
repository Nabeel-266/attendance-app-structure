import "../styles/loginForm.css";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// React Toastify
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { toastDesign } from "../helper/toastDesign";

// React icons
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const LoginForm = () => {
  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  // User Login handler
  const loginFormSubmissionHandler = async (e) => {
    console.log("OK Login!");
    e.preventDefault();
  };

  return (
    <div className="loginFormCont w-[85%] sm:w-[62%] md:w-[50%] lg:w-[35%] bg-zinc-100 bg-opacity-80 rounded-md shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] overflow-hidden pt-2 pb-4 px-4 backdrop-blur-md">
      {/* Login Form Heading */}
      <div className="py-2 border-b-2 border-[#555]">
        <h1 className="text-center text-3xl leading-8 text-[#444] font-bold">
          Log in to SMIT
        </h1>
      </div>

      {/* login Form */}
      <form
        action="#"
        className="px-1 flex flex-col"
        onSubmit={(e) => {
          if (email && password) {
            loginFormSubmissionHandler(e);
          }
        }}>
        {/* Form Fieldset */}
        <fieldset className="flex flex-col gap-5 pt-5 pb-4">
          {/* For Email */}
          <div className="loginInputFieldArea">
            <input
              type="email"
              id="email"
              className="loginInputField"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="email"
              className="loginInputLabel"
              style={
                email
                  ? { transform: "translateY(-110%)", fontSize: "0.85rem" }
                  : { transform: "translateY(0%)", fontSize: "0.98rem" }
              }>
              Email Address
            </label>
          </div>

          {/* For Password */}
          <div className="loginInputFieldArea">
            <input
              type={isShowPassword ? "text" : "password"}
              id="password"
              className="loginInputField"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="password"
              className="loginInputLabel"
              style={
                password
                  ? { transform: "translateY(-110%)", fontSize: "0.85rem" }
                  : { transform: "translateY(0%)", fontSize: "0.98rem" }
              }>
              Password
            </label>
            <span className="eyeIcon">
              {isShowPassword ? (
                <FaEye
                  style={{ cursor: "pointer", color: "#444", fontSize: "16px" }}
                  onClick={() => setIsShowPassword(false)}
                />
              ) : (
                <FaEyeSlash
                  style={{ cursor: "pointer", color: "#444", fontSize: "16px" }}
                  onClick={() => setIsShowPassword(true)}
                />
              )}
            </span>
          </div>
        </fieldset>

        {/* Remember Me */}
        <div className="flex justify-start items-center space-x-2 mb-4 px-1">
          <input
            type="checkbox"
            name="forgotPassword"
            id="forgotPassword"
            className="scale-110"
          />
          <span className="text-[16px] leading-4 font-medium text-[#444] pointer-events-none">
            Remember Me
          </span>
        </div>

        {/* login Button */}
        <button
          disabled={email && password ? false : true}
          style={
            email && password
              ? { backgroundColor: "#0873b9", cursor: "pointer" }
              : { backgroundColor: "#666", cursor: "not-allowed" }
          }
          className="w-full py-[11px] rounded-[3px] font-bold text-white text-[22px] leading-6 active:scale-95 transition-all">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
