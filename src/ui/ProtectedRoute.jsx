/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import useAuthorize from "../features/Authentication/useAuthorize";
import { useEffect } from "react";
import Loader from "./Loader";
import toast from "react-hot-toast";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isAuthorized, isLoading, user, isVarified } =
    useAuthorize();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      return navigate("/auth");
    }
    if (!isVarified && !isLoading) {
      navigate("/");
      toast.error("پروفایل شما هنوز تایید نشده است.");
    }
    if (!isAuthorized && !isLoading) {
      return navigate("/not-access");
    }
  }, [isAuthenticated, isAuthorized, navigate, isLoading, isVarified]);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loader />
      </div>
    );
  }
  if (isAuthenticated && isAuthorized) {
    return children;
  }
}
