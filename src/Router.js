import { Route, Routes } from "react-router-dom";
import { Login, Register } from "./pages";
import AuthRequired from "./components/authRequired/AuthRequired";
import AuthLayout from "./layout/auth/AuthLayout";
import { authRoutes, mainRoutes } from "./constans/path";

const Router = () => {
  return (
    <Routes>
      {/* auth routes */}
      <Route element={<AuthLayout />}>
        <Route path={authRoutes.login} element={<Login />} />
        <Route path={authRoutes.register} element={<Register />} />
      </Route>

      <Route element={<AuthRequired />}>
        <Route path={mainRoutes.profile} element={<>Profile</>} />
      </Route>

      <Route path={mainRoutes.home} element={<>home</>} />

      {/* public routes */}

      {/* not found */}
      <Route path="*" element={<>Page not found 404</>} />
    </Routes>
  );
};

export default Router;
