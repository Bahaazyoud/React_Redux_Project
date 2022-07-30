import React, { useState } from "react";

const Check = (Login) => {
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    if (Login) {
      setLogin("true");
    }
  };
  return login, handleLogin;
};

export default Check;