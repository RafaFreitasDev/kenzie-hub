import React from "react";
import { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";
import { Loading } from "../Loading/Loaging";

export function ProtectedRoutes() {
  const { user, loading } = useContext(UserContext);


  if (loading) {
    return <Loading />;
  } else {
    return <>{user ? <Outlet /> : <Navigate to={"/"} />}</>;
  }
}
