import { onAuthStateChanged } from "firebase/auth";
import { memo, useEffect, useState } from "react";
import { auth } from "../../firbase";
import { Navigate, Outlet } from "react-router-dom";

const AuthRequired = () => {
  const [allow, setAllow] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        console.log(user);
        
      setAllow(Boolean(user));
    });
  }, []);

  return allow === null ? (
    "Loadingmkk..."
  ) : allow ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} replace={true} />
  );
};

export default memo(AuthRequired);
