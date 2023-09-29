import Image from 'next/image';
import styles from './boilerbox.module.css';
import DateYear from '../showYear/date';
import Link from 'next/link';
import { BiCopyright } from 'react-icons/bi';

const BoilerBox = () => {
  return (
    <div className={styles.boilerbox}>
      <Image src={'/logo/logo-white.svg'} alt="M Logo" width={132} height={150} />
      <div>
        <h1>NextJS Template</h1>
        <Link href="/about" className={styles.about}>
          ABOUT PAGE
        </Link>
        <span className={styles.copyright}>
          <BiCopyright />
          Copyright&nbsp;
          <DateYear /> - All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default BoilerBox;
