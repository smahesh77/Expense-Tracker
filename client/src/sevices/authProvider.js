import React, { ReactNode, useState } from "react";
import AuthContext from "../contexts/authContext";


const AuthProvider = ( children = ReactNode) => {
  const [User, setUser] = useState({
    id: "",
    name: "",
    token: null,
    gmail:"",
    status: false,
  });
  return (
    <AuthContext.Provider value={{ User, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;