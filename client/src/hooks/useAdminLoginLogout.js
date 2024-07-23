import { toast } from "react-toastify"
import { setCookie } from "./useSetCookie"
import { useAuthContext } from "../context/authContext"
import { loginAdmin, logoutAdmin } from "../api/adminApi"

export const useLoginAdmin = () => {
    const { login } = useAuthContext();

    const loginHandler = async (username, password) => {
        const success = handleErrors ({ username, password });
        if (!success) return;

        try {
            const data = await loginAdmin(username, password)
            login(data)
            setCookie('token', data.token, 30)
        } catch (error) {
            toast.error(error.message)
        }
    }

    return { loginHandler}
}

export const useLogoutAdmin = () => {
    const { logout } = useAuthContext();
  
    const logoutHandler = async () => {
      try {
        await logoutAdmin();
        logout();
      } catch (error) {
        toast.error(error.message);
      }
    };
  
    return { logoutHandler };
  };
  


function handleErrors({ username, password }) {
    return !username || !password
      ? (toast.error("Molinom popunite potrebna polja"), false)
      : true;
  }