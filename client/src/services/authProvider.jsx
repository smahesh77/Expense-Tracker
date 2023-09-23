import React, { ReactNode, useState } from "react";
import AuthContext from "../contexts/authContext";


const AuthProvider = ( props) => {
  const [User, setUser] = useState({
    id: "",
    name: "",
    balance:0,
    debt:0,
    token: null,
    gmail:"",
    status: false,
  });
  return (
    <AuthContext.Provider value={{ User, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;