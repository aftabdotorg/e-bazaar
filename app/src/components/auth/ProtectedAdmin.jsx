import { useSelector } from "react-redux";
import { selectLoggedUser } from "./authSlice";
import { Navigate } from "react-router-dom";

const ProtectedAdmin = ({ children }) => {
  const user = useSelector(selectLoggedUser);

  if (!user) {
    return <Navigate to={`/login`}></Navigate>;
  }

  if (user && user.role !== "admin") {
    return <Navigate to={`/`} replace={true}></Navigate>;
  }
  return children;
};

export default ProtectedAdmin;
