import styles from './page.module.css';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className={styles.page}>
      <h2>404</h2>
      <p>Siden blev ikke fundet.</p>{' '}
      <span>
        <Link href="/">Go back</Link>
      </span>
    </div>
  );
};

export default NotFound;
