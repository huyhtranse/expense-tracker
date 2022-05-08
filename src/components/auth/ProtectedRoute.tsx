import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { auth } from "../../firebaseConfig";
import { AuthContextType, Props } from "../../interface";

const ProtectedRoute = ({ children }: Props | any) => {
  const { user } = useAuth() as AuthContextType;
  const [userr, setUserr] = useState<any | null>(null);

  if (window.sessionStorage.length !== 0) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
