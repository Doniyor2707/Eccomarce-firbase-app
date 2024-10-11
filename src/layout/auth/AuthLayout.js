// react-router-dom
import { Outlet } from "react-router-dom";

// components
import Header from "../../components/main/header/Header";
import Footer from "../../components/main/footer/Footer";
// style
import styles from "./AuthLayout.module.css";

const AuthLayout = () => {
  return (
    <div className={styles.layout}>
      {/* header */}
      <Header />

      <Outlet />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default AuthLayout;
