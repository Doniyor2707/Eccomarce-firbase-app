import { Route, Routes } from "react-router-dom";
import { Login, Register } from "./pages";
import AuthRequired from "./components/authRequired/AuthRequired";
import AuthLayout from "./layout/auth/AuthLayout";
import { authRoutes, mainRoutes } from "./constans/path";
import Home from "./pages/main/home/Home";
import Profile from "./pages/main/profile/Profile";

const Router = () => {
  return (
    <Routes>
      {/* auth routes */}
      <Route element={<AuthLayout />}>
        <Route path={authRoutes.login} element={<Login />} />
        <Route path={authRoutes.register} element={<Register />} />
      </Route>

      <Route element={<AuthRequired />}>
        <Route path={mainRoutes.profile} element={<Profile/>} />
      </Route>

      <Route path={mainRoutes.home} element={<Home />} />

      {/* public routes */}

      {/* not found */}
      <Route path="*" element={<>Page not found 404</>} />
    </Routes>
  );
};

export default Router;
