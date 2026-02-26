import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/user/userSlice";
import { useState } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const location = useLocation();
  const [agreed, setAgreed] = useState(false);

  const from = location.state?.from?.pathname || "/";

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      dispatch(
        setUser({
          uid: result.user.uid,
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
        })
      );

      navigate(from, { replace: true });
    } catch (error) {
      console.log("Login Error:", error);
    }
  };

  return (
  <div className="min-h-screen bg-[#fde2e4] flex items-center justify-center px-4 py-10">
    <div className="w-full max-w-sm bg-white shadow-md rounded-sm overflow-hidden">

      {/* Promo Banner */}
      <div>
        <img 
        src="banner/hero-2.png"
        alt="logo"
        className=""/>
      </div>

      {/* Form */}
      <div className="p-6">
        <h1 className="text-lg font-semibold text-gray-800 mb-5">
          Login <span className="text-gray-400 font-normal">or Signup</span>
        </h1>

        {/* Mobile Input */}
        <div className="flex border border-gray-300 rounded-sm overflow-hidden">
          <span className="bg-gray-100 px-3 flex items-center text-gray-600 text-sm">
            +91
          </span>
          <input
            type="text"
            placeholder="Mobile Number *"
            className="w-full px-3 py-2 outline-none text-sm"
          />
        </div>

        {/* Checkbox + Terms */}
        <div className="flex items-start gap-2 mt-4">
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            className="mt-1 accent-pink-500 cursor-pointer"
          />
          <p className="text-xs text-gray-500 leading-5">
            By continuing, I agree to the{" "}
            <a
              href="/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 font-medium hover:underline"
            >
              Terms of Use
            </a>{" "}
            &{" "}
            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 font-medium hover:underline"
            >
              Privacy Policy
            </a>{" "}
            and I am above 18 years old.
          </p>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleGoogleLogin}
          disabled={!agreed}
          className={`w-full font-semibold py-3 mt-5 text-sm tracking-wide transition duration-300 
          ${
            agreed
              ? "bg-pink-500 hover:bg-pink-600 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          CONTINUE WITH GOOGLE
        </button>

        {/* Help */}
        <p className="text-xs text-gray-500 mt-6">
          Have trouble logging in?{" "}
          <span className="text-pink-500 font-medium cursor-pointer hover:underline">
            Get help
          </span>
        </p>
      </div>
    </div>
  </div>
);
};