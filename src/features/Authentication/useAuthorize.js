import { useLocation } from "react-router-dom";
import useUser from "./useUser";
export default function useAuthorize() {
  const { isLoading, user } = useUser();
  let isAuthenticated = false;
  if (!isLoading && user) {
    isAuthenticated = true;
  }
  let isVarified = false;
  if (!isLoading && user && Number(user.status) === 2) {
    isVarified = true;
  }
  let isAuthorized = false;
  const { pathname } = useLocation();
  const desiredRole = pathname.split("/").at(1);
  const ROLES = { admin: "ADMIN", freelancer: "FREELANCER", owner: "OWNER" };
  if (Object.keys(ROLES).includes(desiredRole)) {
    if (user && user.role === ROLES[desiredRole]) {
      isAuthorized = true;
    }
  }
  return { isLoading, user, isAuthenticated, isAuthorized, isVarified };
}
