// styles import
import styles from "./CardTitle.module.css";

function CardTitle({ title, spanTitle }) {
  return (
    <h3 className={styles.cardTitle}>
      {title} <span>{spanTitle}</span>
      
    </h3>
  );
}

export default CardTitle;
