import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = ({ category, subcategory }) => {
  const formatText = (text) =>
    text?.replaceAll("-", " ").toUpperCase();

  return (
    <nav className={styles.breadcrumbWrapper}>
      <Link href="/" className={styles.link}>HOME</Link>

      {category && (
        <>
          <span className={styles.separator}>/</span>
          <Link href={`/${category}`} className={styles.link}>
            {formatText(category)}
          </Link>
        </>
      )}

      {subcategory && (
        <>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>
            {formatText(subcategory)}
          </span>
        </>
      )}
    </nav>
  );
};

export default Breadcrumbs;
