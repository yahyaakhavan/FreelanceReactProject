/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import useAuthorize from "../features/Authentication/useAuthorize";
import { useEffect } from "react";
import Loader from "./Loader";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isAuthorized, isLoading, user } = useAuthorize();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated == false && isLoading == false) {
      navigate("/auth");
    }
    if (isAuthorized == false && isLoading == false) {
      navigate("/not-access");
    }
  }, [isAuthenticated, isAuthorized, navigate, isLoading]);
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
