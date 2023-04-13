import { Outlet, Navigate } from "react-router-dom";

const PrivateRouteAdmin = () => {
  const auth = localStorage.getItem("tokenAdmin") ;
  return auth ? <Outlet /> : <Navigate to="/connexion" />;
};

export default PrivateRouteAdmin;
