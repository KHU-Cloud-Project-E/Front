import React, { useEffect } from "react";
import { useLocation } from "react-router";

function Signcall() {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    localStorage.clear();
    const accessToken = searchParams.get('access_token');
    const refreshToken = searchParams.get('refresh_token');
    //console.log(accessToken);
    localStorage.setItem("token", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    window.location.replace("/");
  }, []);
  return <></>;
}

export default Signcall;