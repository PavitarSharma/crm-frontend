import { Navigate } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";

const PrivateRoute = ({ children }) => {
  const auth = true;

  return auth ? <DefaultLayout>{children}</DefaultLayout> : <Navigate to="/" />;
};

export default PrivateRoute;
