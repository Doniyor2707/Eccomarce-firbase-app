// Images
import Watch from "../../../../assets/photo-1523275335684-37898b6baf30.jpeg";
import Star from "../../../../assets/Vector.svg";
import Cart from "../../../../assets/card.svg";

// styles
import styles from "./cardContent.module.css";

function CardContent() {
  return (
    <div className={styles.watch}>
      <img
        className={styles.watchImages}
        src={Watch}
        alt="watch"
        width={300}
        height={360}
      />

      <span className={styles.card}>
        <img src={Cart} alt="Cart" />
      </span>

      <div className={styles.watchTitle}>
        <div className={styles.titleContent}>
          <h4 className={styles.title}>Black Automatic Watch</h4>
          <span>$169.99</span>
        </div>
        <p className={styles.paragrf}>Accessories</p>

        <div className={styles.star}>
          <img className={styles.starImages} src={Star} alt="starIcon" />
          <p>4.9 (98)</p>
        </div>
      </div>
    </div>
  );
}

export default CardContent;
