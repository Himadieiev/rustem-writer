import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectUser } from "../../redux/auth/selectors";

const PrivateRoute = () => {
  const user = useSelector(selectUser);
  return user.name ? <Outlet /> : <Navigate to="/" replace />;
};
export default PrivateRoute;
