import { Route, Routes } from "react-router-dom";
import { Login, Register } from "./pages";
import AuthRequired from "./components/authRequired/AuthRequired";
import AuthLayout from "./layout/auth/AuthLayout";

const Router = () => {
  return (
    <Routes>
      {/* auth routes */}
      <Route  element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<AuthRequired />}>
        <Route path="/profile" element={<>Profile</>} />
      </Route>

      <Route path="/home" element={<>home</>} />

      {/* public routes */}

      {/* not found */}
      <Route path="*" element={<>Page not found 404</>} />
    </Routes>
  );
};

export default Router;
