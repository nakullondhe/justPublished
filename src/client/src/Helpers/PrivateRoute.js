import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const PrivateRoute = () => {
  const [user, setUser] = React.useState("null");
  useEffect(() => {
    const jwt = localStorage.getItem("jptoken");
    setUser(jwt);
  }, []);
  if(user === null) return <Navigate to="/auth" />;
  if(user) return <Outlet />;
};

export default PrivateRoute;