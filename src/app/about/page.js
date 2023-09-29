import styles from './page.module.css';
import Link from 'next/link';

const PageAbout = () => {
  return (
    <div className={styles.page}>
      <h2>ABOUT PAGE</h2>
      <p>Welcome to about page</p>
      <span>
        <Link href="/">Go back</Link>
      </span>
    </div>
  );
};

export default PageAbout;
