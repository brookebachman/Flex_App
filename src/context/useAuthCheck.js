import { useEffect } from "react";
import { useAuth } from "./context";

const useAuthCheck = () => {
  const { login, logout } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Optionally verify the token with the server
      login();
    } else {
      logout();
    }
  }, [login, logout]);
};

export default useAuthCheck;
