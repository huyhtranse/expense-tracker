import { Navigate } from "react-router-dom";
import { Props } from "../../interface";

const ProtectedRoute = ({ children }: Props | any) => {

  if (window.sessionStorage.length !== 0) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
