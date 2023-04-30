import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const LogoutIndex = () => {
  let history = useHistory();
  useEffect(() => {
    localStorage.clear();
    history.push("/LoginReact");
  }, []);

  return <></>;
};

export default LogoutIndex;
