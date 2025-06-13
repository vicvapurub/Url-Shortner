import React from "react";
import { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const AuthPage = () => {

    const [Login, setLogin] = useState(true);
  return (
   <>
     {Login ? <LoginForm state={setLogin} /> : <RegisterForm state={setLogin} />}
   </>
  );
};

export default AuthPage;
