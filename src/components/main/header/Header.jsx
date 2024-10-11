import Logo from "../../../assets/logo.svg";
import Search from "../../../assets/SVG.svg";
import Cart from "../../../assets/cart.svg";
import User from "../../../assets/user-btn.svg";

// styles
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      {/* logo */}
      <img src={Logo} alt="Logo" width={100} style={{ cursor: "pointer" }} />

      <div className={styles.headerSearch}>
        <div className={styles.search}>
          <img src={Search} alt="Search" />
        </div>
        <input
          className={styles.input}
          type="text"
          name="search"
          placeholder="Search in products..."
        />
      </div>

      <div className={styles.user}>
        <img src={User} alt="user" />
        <img src={Cart} alt="cart" />
      </div>
    </div>
  );
};

export default Header;
