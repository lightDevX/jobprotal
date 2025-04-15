import React from "react";
import AuthContext from "../context/AuthContext/AuthContext";

const AuthProvider = ({ children }) => {
  return <AuthContext>{children}</AuthContext>;
};

export default AuthProvider;
